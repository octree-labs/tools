#!/usr/bin/env python3
"""
Measures the facts shown on the per-symbol pages by compiling every command
with Tectonic (https://tectonic-typesetting.github.io), instead of trusting
hand-written package claims:

  packages         smallest package set that makes `$<command>$` compile
  mode             "math", "text" (only works outside math) or "both"
  examplePackages  packages the page's full example document needs

Reads lib/symbol-pages/content.json (one entry per command, with the example)
and lib/symbol-pages/names.json, writes lib/symbol-pages/facts.json.
Run after adding symbols or editing examples:

  python3 scripts/symbol-facts.py

The example body built here must match buildExampleDocument() in
lib/symbol-pages/model.ts.
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR = os.path.join(ROOT, "lib", "symbol-pages")

CANDIDATES = [
    [], ["amssymb"], ["amsmath"], ["amsmath", "amssymb"], ["mathtools"], ["stmaryrd"],
    ["cancel"], ["mathrsfs"], ["bm"], ["esint"], ["wasysym"], ["gensymb"], ["eurosym"],
    ["braket"], ["upgreek"], ["physics"],
]
EXTRA = [[], ["amsmath"], ["amssymb"], ["amsmath", "amssymb"], ["amsmath", "amssymb", "mathtools"]]
# Characters whose text-mode glyph is wrong under pdfLaTeX's default OT1
# encoding (< prints as an inverted exclamation mark), so they count as math only.
MATH_ONLY = {"<", ">", "|"}


def compile_ok(body, packages, workdir):
    src = "\\documentclass{article}\n"
    if packages:
        src += "\\usepackage{%s}\n" % ",".join(packages)
    src += "\\begin{document}\n%s\n\\end{document}\n" % body
    d = tempfile.mkdtemp(dir=workdir)
    try:
        with open(os.path.join(d, "t.tex"), "w") as f:
            f.write(src)
        r = subprocess.run(["tectonic", "-X", "compile", "--untrusted", "t.tex"],
                           cwd=d, capture_output=True, text=True, timeout=180)
        return r.returncode == 0
    finally:
        shutil.rmtree(d, ignore_errors=True)


def merge(a, b):
    return sorted(set(a) | set(b), key=lambda p: [x for c in CANDIDATES + EXTRA for x in c].index(p))


ESCAPES = {"\\": "\\textbackslash{}", "&": "\\&", "%": "\\%", "#": "\\#", "_": "\\_",
           "{": "\\{", "}": "\\}", "$": "\\$", "^": "\\^{}", "~": "\\~{}"}


def escape_text(s):
    return "".join(ESCAPES.get(ch, ch) for ch in s)


def measure(args):
    latex, entry, name, workdir = args
    packages = next((p for p in CANDIDATES if compile_ok("$%s$" % latex, p, workdir)), None)
    text_ok = latex not in MATH_ONLY and compile_ok("x %s x" % latex, packages or [], workdir)
    if packages is None and not text_ok:
        return latex, None
    mode = "both" if packages is not None and text_ok else ("math" if packages is not None else "text")
    if packages is None:
        packages = next((p for p in CANDIDATES if compile_ok("x %s x" % latex, p, workdir)), [])
    own = latex if mode == "text" else "$%s$" % latex
    body = "%s: %s\n\n\\[ %s \\]" % (escape_text(name), own, entry["example"])
    example = next((merge(packages, e) for e in EXTRA if compile_ok(body, merge(packages, e), workdir)), None)
    return latex, {"packages": packages, "mode": mode, "examplePackages": example}


def main():
    if not shutil.which("tectonic"):
        sys.exit("tectonic is required (brew install tectonic)")
    content = json.load(open(os.path.join(DIR, "content.json")))
    names = json.load(open(os.path.join(DIR, "names.json")))
    datanames = json.loads(subprocess.run(
        ["npx", "tsx", "-e",
         "import {SYMBOL_PAGES} from './lib/symbol-pages';"
         "console.log(JSON.stringify(Object.fromEntries(SYMBOL_PAGES.map(p=>[p.latex,p.name]))))"],
        cwd=ROOT, capture_output=True, text=True, check=True).stdout)
    workdir = tempfile.mkdtemp(prefix="symbol-facts-")
    jobs = [(k, v, names.get(k, datanames.get(k, k)), workdir) for k, v in content.items()]
    facts, failed = {}, []
    with ThreadPoolExecutor(8) as ex:
        for latex, f in ex.map(measure, jobs):
            if f is None or f["examplePackages"] is None:
                failed.append(latex)
            facts[latex] = f
    shutil.rmtree(workdir, ignore_errors=True)
    with open(os.path.join(DIR, "facts.json"), "w") as out:
        json.dump(facts, out, ensure_ascii=False, indent=1)
        out.write("\n")
    print("measured %d commands; failing: %s" % (len(facts), failed or "none"))
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()

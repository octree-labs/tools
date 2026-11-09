import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_UPLOAD_BYTES,
  UPLOAD_ERRORS,
  acceptAttribute,
  allowedKinds,
  checkUpload,
  parseConvertRequest,
  resolveMime,
  stripCodeFences,
} from '../lib/convert-input';

const b64 = (bytes: number) => Buffer.alloc(bytes, 1).toString('base64');

test('allowedKinds reads the tool label', () => {
  assert.deepEqual(allowedKinds('PDF'), ['pdf']);
  assert.deepEqual(allowedKinds('JPEG, PNG, PDF'), ['image', 'pdf']);
  assert.deepEqual(allowedKinds('JPEG, PNG'), ['image']);
  assert.deepEqual(allowedKinds('CSV'), []);
});

test('acceptAttribute includes application/pdf for the PDF tool', () => {
  const accept = acceptAttribute(['pdf']);
  assert.match(accept, /application\/pdf/);
  assert.doesNotMatch(accept, /image\//);
});

test('resolveMime falls back to the extension', () => {
  assert.equal(resolveMime({ name: 'paper.PDF', type: '' }), 'application/pdf');
  assert.equal(resolveMime({ name: 'x.jpg', type: '' }), 'image/jpeg');
  assert.equal(resolveMime({ name: 'x.heic', type: '' }), '');
});

test('checkUpload accepts a PDF on the PDF tool', () => {
  const res = checkUpload({ name: 'a.pdf', type: 'application/pdf', size: 1000 }, ['pdf']);
  assert.deepEqual(res, { ok: true, kind: 'pdf', mime: 'application/pdf' });
});

test('checkUpload rejects an image on the PDF tool with a visible message', () => {
  const res = checkUpload({ name: 'a.png', type: 'image/png', size: 1000 }, ['pdf']);
  assert.deepEqual(res, { ok: false, error: UPLOAD_ERRORS.unsupported_pdf_only });
});

test('checkUpload rejects HEIC, oversized and empty files', () => {
  assert.equal(checkUpload({ name: 'a.heic', type: 'image/heic', size: 10 }, ['image', 'pdf']).ok, false);
  assert.deepEqual(checkUpload({ name: 'a.pdf', type: 'application/pdf', size: MAX_UPLOAD_BYTES + 1 }, ['pdf']), {
    ok: false,
    error: UPLOAD_ERRORS.too_large,
  });
  assert.deepEqual(checkUpload({ name: 'a.pdf', type: 'application/pdf', size: 0 }, ['pdf']), {
    ok: false,
    error: UPLOAD_ERRORS.empty,
  });
});

test('parseConvertRequest accepts PDF and image data URLs', () => {
  const pdf = parseConvertRequest({ image: `data:application/pdf;base64,${b64(100)}`, filename: 'paper.pdf' });
  assert.equal(pdf.ok && pdf.kind, 'pdf');
  assert.equal(pdf.ok && pdf.filename, 'paper.pdf');
  const img = parseConvertRequest({ image: `data:image/jpg;base64,${b64(100)}` });
  assert.equal(img.ok && img.kind, 'image');
  assert.equal(img.ok && img.mime, 'image/jpeg');
});

test('parseConvertRequest returns 400/413/415 instead of guessing', () => {
  assert.deepEqual(
    (({ status, code }) => ({ status, code }))(parseConvertRequest({}) as { status: number; code: string }),
    { status: 400, code: 'missing_file' },
  );
  const notDataUrl = parseConvertRequest({ image: 'https://example.com/x.pdf' });
  assert.equal(!notDataUrl.ok && notDataUrl.status, 400);
  const docx = parseConvertRequest({ image: `data:application/msword;base64,${b64(10)}` });
  assert.equal(!docx.ok && docx.status, 415);
  const big = parseConvertRequest({ image: `data:application/pdf;base64,${b64(MAX_UPLOAD_BYTES + 3)}` });
  assert.equal(!big.ok && big.status, 413);
  const atLimit = parseConvertRequest({ image: `data:application/pdf;base64,${b64(MAX_UPLOAD_BYTES)}` });
  assert.equal(atLimit.ok, true);
});

test('stripCodeFences removes a latex fence only when it wraps everything', () => {
  assert.equal(stripCodeFences('```latex\n\\documentclass{article}\n```'), '\\documentclass{article}');
  assert.equal(stripCodeFences('\\documentclass{article}'), '\\documentclass{article}');
});

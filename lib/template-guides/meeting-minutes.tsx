import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "What should be included in meeting minutes?",
    answer:
      "At minimum: the organisation and meeting name, the date, time and place, who chaired and who took the minutes, who attended and who sent apologies, whether the meeting was quorate, the agenda, the decision reached on each item, every action with an owner and a due date, the date of the next meeting and a line for approval. A short summary of the discussion behind each decision is useful, but the decisions and actions are what people come back to the minutes for.",
  },
  {
    question: "What is the difference between meeting minutes and meeting notes?",
    answer:
      "Minutes are the formal record of a meeting: they follow the agenda, record decisions and actions, and are approved at the next meeting, so they can be relied on later. Meeting notes are informal and personal; they capture whatever the writer found useful and nobody signs them off. You can use this template as a meeting notes template by deleting the approval block and the quorum line, but keep the action items table, because that is the part that gets work done.",
  },
  {
    question: "Who writes the minutes of a meeting?",
    answer:
      "A designated minute-taker, often a secretary, a board clerk or someone in an operations role, who does not chair the meeting. The chair reviews the draft, it is circulated to attendees, and the minutes are formally approved, with any corrections, as the first item of the next meeting. The template has separate lines for the minute-taker, the circulation date and the chair's approval.",
  },
  {
    question: "Can I use this as a board meeting minutes template?",
    answer:
      "Yes. Board minutes need the same structure with stricter wording: record the quorum, any declarations of interest at the start, the exact text of each resolution and how it was passed (unanimously, or with the number for and against if your rules require it), and who left the room for which item. Add a \\agendaitem for declarations of interest and write each decision as a resolution. Check your bylaws or articles for anything they require the minutes to contain.",
  },
  {
    question: "How soon after a meeting should minutes be sent out?",
    answer:
      "Within one or two working days while everyone still remembers the meeting, and always well before the next one, so owners can start on their actions. The example was circulated the day after the meeting, six days before the next one.",
  },
];

export default function MeetingMinutesGuide() {
  return (
    <article>
      <GuideH2 id="example">Meeting minutes example</GuideH2>
      <GuideP>
        Meeting minutes are the official written record of a meeting: who was there, what
        was on the agenda, what was decided and who agreed to do what by when. This free
        LaTeX meeting minutes template comes with a complete, realistic example rather
        than bracketed placeholders, so you can see how good minutes read before you
        replace the content with your own. The example records a one-hour weekly sync of
        the Product Council at a fictional software company. The first page opens with a
        header block giving the organisation, the meeting title, the date, time and
        location, the chair, the minute-taker and whether the meeting was quorate. Below
        it, an attendees and apologies table sits next to the numbered agenda of five
        items. The minutes then work through the agenda in order: approval of the previous
        minutes with one correction, a conditional go/no-go decision on a software
        release, a discussion of onboarding drop-off that ends in a prototyping decision,
        a budget request approved in principle, and any other business. The second page
        collects every action in one table with an ID, owner, due date and status, then
        gives the date of the next meeting and signature lines for the minute-taker and
        the chair. The whole document is two pages.
      </GuideP>

      <GuideH2 id="format">Minutes of meeting format: the sections every set of minutes needs</GuideH2>
      <GuideP>
        Most organisations use the same minutes of meeting format, whether the meeting is
        a team sync, a committee or a board. The template keeps the sections in this
        order.
      </GuideP>
      <GuideTable
        headers={["Section", "What it records", "In the template"]}
        rows={[
          [
            "Header",
            "Organisation, meeting name, date, start and end time, location or call link, chair, minute-taker, quorum.",
            "Two-column table under the title",
          ],
          [
            "Attendance",
            "Everyone present, anyone attending part of the meeting, and apologies from those who could not come.",
            "Booktabs table with name, role, attendance",
          ],
          [
            "Agenda",
            "The numbered items in the order they were taken. The numbering is reused in the body.",
            "enumerate list beside the attendance table",
          ],
          [
            "Minutes of each item",
            "A short summary of the discussion, the decision reached and any actions arising.",
            "One \\agendaitem block per item",
          ],
          [
            "Action items",
            "Every action from the meeting plus any carried forward, each with an owner, due date and status.",
            "Booktabs table on the last page",
          ],
          [
            "Next meeting",
            "Date, time, place and known agenda items, plus the deadline for adding items.",
            "One paragraph",
          ],
          [
            "Approval",
            "Who recorded the minutes, when they were circulated, and the chair's sign-off once approved.",
            "Two signature lines",
          ],
        ]}
      />

      <GuideH2 id="agenda-decisions-actions">Agenda, attendees, decisions and action items</GuideH2>
      <GuideH3>Agenda</GuideH3>
      <GuideP>
        Copy the agenda that was circulated before the meeting and keep its numbering, so
        item 3 on the agenda is item 3 in the minutes. If the meeting took items out of
        order or added one under any other business, record it where it happened. The
        list doubles as an agenda template: send the header and agenda on their own before
        the meeting, then fill in the rest afterwards.
      </GuideP>
      <GuideH3>Attendees and apologies</GuideH3>
      <GuideP>
        List everyone by name and role, mark remote attendance, and note people who were
        only present for part of the meeting (Daniel Kim attends item 4 only in the
        example). Apologies matter: an action owner who was absent needs to be told.
      </GuideP>
      <GuideH3>Decisions</GuideH3>
      <GuideP>
        Write each decision as one sentence that would make sense to someone who was not
        in the room, including any conditions. &quot;Conditional go for Tuesday 20
        October, provided both blocking defects are closed and verified by Friday 16
        October&quot; can be checked later; &quot;agreed to proceed&quot; cannot. Record
        what was decided rather than who said what; keep the discussion summary to two or
        three sentences that explain why.
      </GuideP>
      <GuideH3>Action items</GuideH3>
      <GuideP>
        Every action needs one named owner and a date. The template writes each action
        under the item that produced it and again in the action items table, where it gets
        an ID (A-11, A-12 and so on) so the next meeting can review them by number.
        Unfinished actions stay in the table with the status &quot;Carried forward&quot;,
        like A-07 in the example, until they are closed.
      </GuideP>

      <GuideH2 id="customise">How to customise the meeting minutes template</GuideH2>
      <GuideUl>
        <li>
          <strong>Header:</strong> change the organisation in the small-caps line and the
          meeting name under it; the date, time, chair and minute-taker are in the
          two-column table directly below.
        </li>
        <li>
          <strong>Agenda items:</strong> each item is one{" "}
          <GuideCode>{"\\agendaitem{number}{title}{presenter}"}</GuideCode> followed by{" "}
          <GuideCode>\discussion</GuideCode> text, a{" "}
          <GuideCode>{"\\decision{...}"}</GuideCode> and zero or more{" "}
          <GuideCode>{"\\action{task}{owner}{due}"}</GuideCode> lines. Copy a block to add
          an item.
        </li>
        <li>
          <strong>Action table:</strong> the action column is a fixed{" "}
          <GuideCode>p{"{3.3in}"}</GuideCode> column that wraps long text; shorten it if
          you add a column such as priority.
        </li>
        <li>
          <strong>Colour:</strong> the headings use one colour defined at the top. Change
          it, or make it black for a plain document:
        </li>
      </GuideUl>
      <GuidePre>{`\\definecolor{accent}{RGB}{0,0,0}`}</GuidePre>
      <GuideP>
        For a short memo summarising a decision to people who were not at the meeting,
        the <GuideLink href="/templates/memo">memo template</GuideLink> is a better fit;
        for personal lecture or reading notes, use{" "}
        <GuideLink href="/templates/cornell-notes">Cornell notes</GuideLink>.
      </GuideP>

      <GuideH2 id="compile">How to compile the meeting minutes</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above, edit the text
          and download the PDF from the preview.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste the source into a blank project; every
          package it uses is part of a standard TeX Live installation.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>minutes.tex</GuideCode> and run
          <GuidePre>{`pdflatex minutes.tex`}</GuidePre>
          One run is enough: there are no citations, cross-references or table of
          contents.
        </li>
      </GuideOl>

      <GuideH2 id="mistakes">Common mistakes in meeting minutes</GuideH2>
      <GuideUl>
        <li>
          <strong>A transcript instead of minutes.</strong> Minutes record outcomes. If an
          item runs to more than a short paragraph, cut the discussion and keep the
          decision and actions.
        </li>
        <li>
          <strong>Actions without an owner or a date.</strong> &quot;The team will look
          into it&quot; never gets done. Name one person and a due date, even if others
          help.
        </li>
        <li>
          <strong>Losing open actions.</strong> Review the previous action table as the
          first item and carry forward anything not closed, as the example does with A-07.
        </li>
        <li>
          <strong>No approval record.</strong> Minutes become the official record only once
          approved. Fill in the date approved and any corrections at the next meeting.
        </li>
        <li>
          <strong>Unescaped special characters.</strong> In LaTeX, write{" "}
          <GuideCode>\%</GuideCode>, <GuideCode>\&amp;</GuideCode>,{" "}
          <GuideCode>\$</GuideCode> and <GuideCode>\#</GuideCode>; a bare % comments out
          the rest of the line.
        </li>
      </GuideUl>

      <GuideH2 id="faq">Meeting minutes template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}

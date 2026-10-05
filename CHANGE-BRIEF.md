# Resume Pro Max landing page: change brief

Revision instructions for the existing `index.html` in this folder. This is not a rebuild. Keep the file, the CSS architecture, the motion system, the waitlist logic, the legal accordions, the analytics block and the CONFIG pattern exactly as they are. Change only what is listed here.

`LANDING-BRIEF.md` still governs everything this file does not mention. Where the two disagree, this file wins.

Read `LANDING-BRIEF.md` section 2 before writing a word. Every hard rule in it still applies: no em dashes, no Oxford commas, no exclamation marks, no price, no technical specification, no ATS positioning, no scores, no claim that we touch the resume.

---

## 1. Brand fidelity: remove the GW badge

This is the most important change in this file. The badge was a mistake in the original brief. GoodWord has no icon.

The locked rule: the wordmark is the single word "GoodWord", set in Inter Black 900, "Good" in Ink Navy and "Word" in Signal Gold. On navy backgrounds "Good" is cream. **Nothing sits beside it. No square, no monogram, no symbol, no lockup.**

Delete every instance:

- Line ~693, nav wordmark: remove the `<span class="gw-badge">G<b>W</b></span>`.
- Line ~1365, footer wordmark: same removal.
- Line ~1462, `pageHTML('report')`: remove the `gw-badge` span from `.pg-brand`, leaving the `Good<b>Word</b>` text.
- Lines ~1582 and ~1590, the mock report page headers: remove the `<span class="mp-badge">G<b>W</b></span>` from `.mp-brand`.
- Any `mp-badge` or `gw-badge` markup in the inline SVG illustrations, including the step illustrations and the drawn report page around lines ~913 and ~1083.

Then delete the now-unused CSS rules: `.gw-badge`, `.gw-badge b`, `.pg-report .pg-brand .gw-badge`, `.mp-badge` and any badge sizing rules inside the mock report styles.

Adjust the wordmark flex gap so the word sits correctly on its own, and re-check the nav height, the footer alignment and the mock report header spacing at 1440 and 390 after the removal.

Grep the finished file for `badge` and confirm zero hits outside unrelated words.

---

## 2. Hero: replace it

Remove the rotating-phrase hero completely. That hero opens on the problem. The page now opens on the upgrade.

Delete: the `#rotator` markup, the `.rotator` and `.rot` CSS, and the rotator interval in the script. Keep the `reveal` stagger pattern.

New hero copy, verbatim:

- Eyebrow: `Resume Pro Max`
- H1, two lines:
  - Line one: `Upgrade from a simple resume`
  - Line two: `to a Resume Pro Max.`
- Tagline under the H1: `Your resume, with the proof attached.`
- Sub: `One file. Your resume exactly as you wrote it, then what the people who worked with you actually said. Verified, in their own words.`
- A quieter line under the sub, set smaller, in steel, italic off, weight 500: `AI can write anything about you. It cannot remember working with you.`
- Buttons unchanged: primary reads from `CTA_LABEL`, secondary steel reads `See a sample`.

That quiet line is doing a job. It stops the page being filed as an AI resume builder inside the first five seconds. Do not move it below the fold and do not shrink it past 15px.

The hero page stack stays exactly as built. It is the signature and it works. No second switch in the hero: the switch lives in "The move" and duplicating it weakens both.

---

## 3. Toggle wording

In "The move", the left switch label changes from `Regular resume` to `Resume`.

- Line ~807: button text becomes `Resume`.
- Line ~1688: the JS that sets `cmpTitle` changes `'Regular resume'` to `'Resume'`.
- The bullet list heading beside the left column changes to `Resume`.

The switch reads as a tier ladder, not as a put-down. In running body copy elsewhere on the page, the phrase is `a simple resume`. Keep those two usages distinct and consistent.

---

## 4. Sample candidate: rename

Every occurrence of `Priya Sharma` becomes `Rahul Khanna`, and every standalone `Priya` becomes `Rahul`.

Pronouns must follow. The mock referee cards currently read "She holds on to the detail longer than she needs to." Rewrite those to match. Check every referee card, the tally line, the alt text on every mock page and the summary block.

Affected lines include ~913, ~1083, ~1538, ~1541, ~1543, ~1558, ~1572, ~1576, ~1578, ~1582, ~1590. Grep for `Priya`, `She `, ` her ` and ` hers` in the mock content after the change and confirm the report reads correctly for a man named Rahul Khanna.

The candidate stays fictional. The referees stay fictional and unnamed, shown by role. No real company names anywhere in the sample.

---

## 5. New section: the sameness

Insert a new section immediately after `#problem` and before the turn. Give it the id `same`.

- Eyebrow: `What changed`
- H2: `And now everyone's resume is excellent.`
- Lead: `Every applicant has the same AI. So every applicant reads the same. Ten years of real work and a well-prompted first draft arrive looking identical.`
- One closing line, set apart: `The thing that used to set you apart did not get better. It disappeared.`

Visual, drawn in HTML, CSS and inline SVG in the existing vocabulary: three resume cards in steel, offset, each showing the same three highlighted phrases lighting up in sequence, then sliding together and flattening into one grey card with the phrases still glowing. Plays once when it scrolls into view, then sits still. Renders in its finished state under `prefers-reduced-motion: reduce`.

Keep the section short. Three elements and the visual. This is a beat, not a chapter.

---

## 6. The turn: keep, confirm the second line

The turn section stays where it is and keeps its two lines:

- `Other AIs make you a robot on your resume. We make you human.`
- `The only AI in GoodWord works on other people's words about you. Your resume stays exactly as you wrote it. Not a word changed.`

If "Not a word changed." is not currently in the file, add it. It is the answer to the most common misreading of this product and it belongs in the largest type on the page.

---

## 7. New copy in "What is inside the report"

The page now has to hold two named things without confusing anyone: the GoodWord report, and Resume Pro Max.

Add a single line directly under the H2 of `#inside`, set as a lead, before the anatomy piece. Use variant A unless told otherwise:

**Variant A**
`The report is what you earn. Resume Pro Max is how you send it.`

**Variant B**
`The report is the proof. Resume Pro Max is the proof, attached to your resume, in one file.`

Do not build a separate section for the report. One line, in this position, is the whole resolution.

---

## 8. "Where to send it": extend the opening

Section `#send` keeps its five moments and its closing line. Change the head.

- H2 stays: `Made for sending to a person.`
- New lead above the five moments: `Send the report on its own as a link, or send Resume Pro Max as one file. Same proof, two shapes.`
- Closing line stays: `Use your plain resume on job portals. Send Resume Pro Max to people.`

---

## 9. New section: both sides walk in prepared

Insert a new section with the id `room`, placed immediately before `#recruiters`.

- Eyebrow: `What changes`
- H2: `Both sides walk in prepared.`
- Lead: `The same file that gets you the interview makes the interview better.`
- Two columns, equal weight, drawn in the existing card vocabulary.
  - Left, steel, headed `You`: three lines. `You know which strengths three people independently confirmed.` `You know your growth areas before anyone asks.` `You prepare for the conversation that will actually happen.`
  - Right, gold, headed `The hiring manager`: three lines. `They read verified strengths and growth areas before the call.` `They skip the resume theatre.` `They ask better questions, because they know what to ask about.`
- Between the columns on desktop, a small centred element: a single document shape with a light line running to each side. On phones the columns stack and the connector becomes a short horizontal rule with the caption `One file, both chairs.`
- Closing line under the columns: `No other document in hiring prepares both sides of the table.`

This is the benefits beat. The page currently argues credibility for nine sections and never says plainly what the candidate gets. This fixes that.

---

## 10. Section order

Reorder the page to this. Move sections whole, do not rewrite them beyond what this brief says.

1. Hero
2. Proof strip
3. `#problem` Every resume makes the same promises.
4. `#same` And now everyone's resume is excellent. **NEW**
5. The turn
6. `#move` Move from a simple resume to a Resume Pro Max.
7. `#inside` What is inside the report.
8. `#sample` See one before you make one.
9. `#how` Four steps. One file.
10. `#send` Made for sending to a person.
11. `#room` Both sides walk in prepared. **NEW**
12. `#recruiters` The people doing the hiring have noticed.
13. `#honest` What keeps it honest.
14. The closer, navy.
15. `#faq`
16. `#waitlist`
17. `#legal`
18. Footer

Three moves are deliberate and worth stating so they are not undone later:

- `#inside` now comes before `#sample`. Teach the parts, then hand over the whole document with a download button. The download then sits immediately before "how do I get one", which is where intent is highest.
- `#how` moves after the sample. Desire first, mechanics second.
- `#honest` moves from the middle of the page to after the recruiter proof. It is the trust close. It has to answer claims the visitor has already read, not claims they have not met yet.

Update the nav anchors and the curved dividers to match the new order. Confirm every internal link still resolves.

---

## 11. Build the real sample

The download button is currently hidden because `SAMPLE_PDF_URL` is empty. Fill it.

Build a real sample Resume Pro Max PDF from the existing mock content, so the page ships with a working download.

- Candidate: Rahul Khanna, Senior Product Manager. Fictional. Fictional employers with invented names. No real company anywhere in it.
- Structure: two resume pages first, then the report pages. One document, in that order. The resume pages must look like a resume the candidate wrote, not like a GoodWord layout.
- The report half carries the real section names already in the mock: validated strengths, areas to grow, the summary, the "would they want this person on their team again" tally, each referee's written response shown by role, the month each reference was given, Response Integrity showing the word Strong, and a report ID and verify link on every report page.
- Watermark every page with the word `SAMPLE`, set low-contrast and diagonal, legible but not obstructive.
- Save as `assets/sample/goodword-sample-resume-pro-max.pdf`.
- Export every page as a flat image at `assets/sample/page-01.png` onwards, sized for the viewer, with width and height attributes set on the img tags.
- Set `SAMPLE_PDF_URL = "assets/sample/goodword-sample-resume-pro-max.pdf"` and `SAMPLE_PAGE_COUNT` to the real page count.
- Verify the hero stack counter now reads the real total, and that the download button appears and downloads.
- Keep the drawn mock in the code as the fallback. Do not delete it.

The note under the download stays: `Fictional candidate, fictional referees, watermarked as a sample. Real files are built only from your referees' submissions.`

---

## 12. Do not change

- The waitlist form: markup, field names, validation, the `URLSearchParams` body, `mode: 'no-cors'`, the consent payload and the endpoint in CONFIG.
- The three legal accordions and their ids.
- The Google Analytics block.
- The CONFIG pattern and `[data-cta]` wiring.
- The design tokens in `LANDING-BRIEF.md` section 3, other than the wordmark rule this file corrects.
- The motion rules in section 5: transform and opacity only, one rAF loop, reduced-motion support.
- The hero page stack, the comparison morph, the sample viewer, the anatomy hotspots and the four step illustrations. They work.

---

## 13. Before handing back

1. Grep the whole file for `badge`, `Priya`, `Regular resume` and `rotator`. Expect zero hits.
2. Grep the visible copy, excluding the legal accordions and all code, for an em dash (U+2014), `₹`, ` MB`, `password`, `ATS`, `identity-verified`, `rating`, `free`, `paid`, `price`, `score` and `!`. The only permitted hit is the phrase `no scores`. Report the grep.
3. Read every new sentence once for Oxford commas.
4. Render at 1440x900 and 390x844 with Playwright and look at the screenshots. Check the nav and footer wordmarks specifically, now that the badge is gone.
5. Check the reduced-motion rendering of the two new sections.
6. Confirm the sample downloads and the viewer pages load.
7. Hand back a short note: what changed, what is in `assets/sample/`, and the one-line Netlify step.

---

## Open items, not to be guessed

- The og-image currently reads `Apply to jobs with a GoodWord.` The brand phrase is `Apply with a GoodWord.` The image is an asset, not code. Flag it, do not regenerate it.
- Variant A or B in section 7 above. Default to A.

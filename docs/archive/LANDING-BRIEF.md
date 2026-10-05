# GoodWord landing page: Resume Pro Max

> Superseded in part. `CHANGE-BRIEF.md` in this folder carries the current revision instructions for the built `index.html`: the wordmark correction, the new hero, the section order, two new sections and the real sample. Where the two files disagree, `CHANGE-BRIEF.md` wins. Everything here that it does not mention still stands.

Build brief for Claude Code. This replaces the page currently live at goodword.tech.

## 0. Before you write anything

Read, in full: this file and `RESUME-PRO-MAX-CONCEPT.md` (the copy source). Then fetch `https://goodword.tech` and save the raw HTML as `previous-index.html`: it is the source of truth for the waitlist form, the CONFIG block, the analytics tag and the legal text. If the fetch fails, ask me for the file.

Then post a one-screen plan: the section list with the fixed lines from section 4 placed, the hero as you intend to build it and any question you have. Wait for my OK. Do not build before that.

## 1. What you are building

A static marketing page for goodword.tech, hosted on Netlify by drag and drop. No build step, no framework, no JavaScript library, no bundler. External resources: Google Fonts (Inter) and the Google Analytics tag already in `previous-index.html`. Nothing else loads from outside.

Deliverables, all in this folder:

- `index.html` (all CSS and JS inline)
- `assets/` (the files described in section 6, referenced by relative path)
- `robots.txt`, `sitemap.xml`, `og-image.png`, `favicon.png` (carry over; update the sitemap date)

The page is a GTM page. Resume Pro Max is one feature of GoodWord and the thing the go-to-market is anchored on. The page sells the move: from a regular resume to a Resume Pro Max. Lead with what it does. Let the name be the label.

## 2. Hard rules

Copy:

- No em dashes anywhere, including code comments and alt text. Use a comma, a full stop or a colon.
- No Oxford commas.
- No exclamation marks.
- Dry, flat, specific, confident. Indian English rhythms and spellings (colour, organise). Keep "anonymized" spelt the way the app spells it.
- Short sentences. Sentence case. Cut the adjective when in doubt.
- Never overclaim. No job-outcome promises. No "genuinely", "honestly", "seamless", "effortless", "revolutionary", "cutting-edge", "powered by".
- Numbers on the page, and only these: 100+, 3,000+, up to 5 referees, 12 months, 3 references (the anonymity rule, FAQ only). Numbers inside the sample or a document mock are content, not claims, and are fine.

Never on this page:

- Any price, currency symbol or money word. No "free", "paid", "cost", "₹", "offer". The page is silent on cost.
- Any technical specification. No file size, no page cap, no "up to 4 MB", no "PDF only", no "not password-protected". "One PDF" as the description of the file is fine.
- "identity-verified" or "ID-checked". The truth is: each referee is confirmed by email through a private, single-use link. Say that.
- Job-portal or ATS positioning. Resume Pro Max is for sending to a person. The page says: use your plain resume on job portals, send Resume Pro Max to people.
- Any score, rating, ranking or number that describes a candidate. Response Integrity is a word (Strong, Good, Moderate, Basic), never a number.
- Any suggestion that GoodWord edits, formats, improves or optimises the resume.
- Fake logos, fake testimonials, invented counts, trust badges.

AI: the report's strengths, areas to grow and summary are written by AI from the referees' own words. Say it plainly, as a fact, in the two places section 4 marks. Not as a feature to sell.

## 3. Design tokens

Option C. The canvas the app at app.goodword.tech already uses, with a steel tint of Ink Navy doing one job: marking the resume side of every before-and-after.

```
--ink        #0F1B2D   text, dark sections, the GW badge
--gold       #D4A442   accent: fills, rules, icons, primary button, text on navy
--goldink    #8A6410   gold TEXT on light backgrounds (contrast rule, see below)
--gold-deep  #B8892E   primary button hover
--steel      #2F4A73   the resume side: resume pages, "the half you write", secondary buttons
--steel-tint #E7EDF6   resume page fill
--steel-line rgba(47,74,115,.34)   resume page lines
--canvas     #F6F7FB   page background. Never Paper Cream on the page.
--wash       three soft radial gradients over the canvas: navy at 7%, gold at 11%, steel at 7%
--white      #FFFFFF   cards
--cream      #FAF7F2   text on navy only (the dark closer, the footer)
--err        #C4471F   form errors only
radius 14px, buttons 999px, one easing: cubic-bezier(.22,.61,.28,1)
```

Contrast rule: gold text on a light background always uses `--goldink`. `--gold` is for fills, rules, icons and text on navy.

Type: Inter throughout, weights 400 500 600 700 800 900. Display and wordmark at 900, tight tracking. Body 17px, line-height 1.6.

Wordmark: live text, never an image. "GoodWord" set as one word, "Good" in ink, "Word" in gold. On navy, "Good" is cream. Nothing sits beside it: no badge, no monogram, no symbol, no icon, no lockup. This is a locked brand rule and it holds everywhere the wordmark appears, including inside every mocked report page and illustration.

Colour meaning, used everywhere a resume and a report appear together: resume pages steel, report pages gold. The eye should read "the half you write" and "the half you can't" without a caption.

## 4. Page structure and copy

Lines in quotes are fixed. Use them verbatim. Everything else you write, from the concept note, under the rules in section 2. Keep every section short. Max information in minimum words.

### Nav (sticky, background on scroll)
Badge + wordmark. Links: How it works · Sample · For recruiters · FAQ. Button: the CTA label from CONFIG.

### Hero
- Eyebrow: "Resume Pro Max"
- H1, two lines. Line one: "Upgrade from a simple resume". Line two: "to a Resume Pro Max." No rotating phrase. The page opens on the upgrade, not on the problem.
- Tagline under the H1: "Your resume, with the proof attached."
- Sub: "One file. Your resume exactly as you wrote it, then what the people who worked with you actually said. Verified, in their own words."
- Quiet line under the sub, steel, weight 500, at least 15px: "AI can write anything about you. It cannot remember working with you."
- Buttons: primary = CTA label; secondary (steel) = "See a sample", scrolls to the sample section.
- Visual: the page stack (section 5.1).

### Proof strip
Three facts, then the chips.
- "100+" candidates through the early-access pilot
- "3,000+" on the waitlist
- "Early access has started, in batches."
- Chips, under the label "What pilot candidates reported": "More interview calls, sooner" · "Walk in knowing how to prepare"
- Small line: "Directional results from the pilot. No inflated numbers here."

### The problem
- H2: "Every resume makes the same promises."
- Lead: "Results-driven. Team player. Strong stakeholder management. A recruiter reads hundreds of these, and every word was written by the person who benefits from it."
- Three short cards, written from the concept note's "The problem it solves": the resume is self-written; the proof arrives last, by phone, if at all; the shortlist is made before anyone hears from a manager or a peer.

### The turn (one full-width statement, large type)
- "Other AIs make you a robot on your resume. We make you human."
- One line under it: "The only AI in GoodWord works on other people's words about you. Your resume stays exactly as you wrote it."

### The move (the GTM section)
- H2: "Move from your regular resume to Resume Pro Max."
- An interactive comparison (section 5.2). Left, steel: "Resume". Right, gold: "Resume Pro Max". In running body copy the phrase is "a simple resume"; the switch itself stays a plain tier ladder.
- Resume, three lines: your claims · nobody on the page to back them · references come later, if anyone asks.
- Resume Pro Max, four lines: your resume, unchanged · what your manager, peers and clients said, verified · whether they would want you on their team again, asked of each one privately · a verify link on every report page.
- Closing line: "Same email. Better attachment."

### How it works
- H2: "Four steps. One file."
- 1 "Nominate up to five referees." Former managers, peers, clients, people who reported to you. You choose. Ask while they still remember: the end of a job or a project is the best time, and the report is ready whenever you next need it.
- 2 "They write, in their own words." Each referee is confirmed by email through a private, single-use link. A few minutes each.
- 3 "Your report is written from what they said." Strengths, areas to grow and a summary, written by AI from their exact words and never made stronger than what they wrote. (AI mention 1 of 2.)
- 4 "Add your resume. Download one file." Your pages first, then your report. Make it again whenever your references change.
- One drawn illustration per step (section 5.6), not a screenshot. Sticky rail on desktop, stacked on phones.

### See a sample
- H2: "See one before you make one."
- The sample viewer (section 5.3) on the pages in `assets/sample/`, and a download button: "Download the sample" linking to `assets/sample/goodword-sample-resume-pro-max.pdf` with the `download` attribute.
- Note under it: "Fictional candidate, fictional referees, watermarked as a sample. Real files are built only from your referees' submissions."

### What is inside the report
- H2: "What is inside the report."
- The anatomy piece (section 5.4) on the first report page of the sample. Hotspots, each with a one-line explanation: validated strengths · areas to grow · the summary (written by AI from the referees' own words, AI mention 2 of 2) · "would they want this person on their team again", the tally · each referee's written response, shown by role unless they chose to be named · when each reference was given, to the month · Response Integrity, one word, based on verification signals and never on how positive the feedback is · report ID and verify link on every page.

### What keeps it honest
- H2: "What keeps it honest."
- Eight short items, one line each, from the concept note's proof points and privacy promise: resume carried through unchanged · report rebuilt every time you make the file · each referee confirmed by email through a private single-use link · anonymous by default, named only where the referee chose · you cannot edit what they wrote · every reference includes an area to grow, by design · words, not numbers, no scores anywhere · your resume is never stored: read, merged, handed back, gone. Plus: your data is yours under India's DPDP Act, export or delete it any time.

### Where to send it
- H2: "Made for sending to a person."
- The five moments from the concept note, one line each: replying to a recruiter who reached out · emailing a hiring manager directly · a referral from a friend inside the company · a WhatsApp or LinkedIn message to someone who asked for your CV · a printed copy for the interview.
- Closing line: "Use your plain resume on job portals. Send Resume Pro Max to people."

### For recruiters
- H2: "The people doing the hiring have noticed."
- Lead: "Feedback from hiring managers in the GoodWord early-access pilot. Anonymized, as everything here is."
- Two pull quotes, verbatim:
  - "It's easier for us to identify the real potential candidates, quicker."
  - "Since we already know a person's strengths and improvement areas, it's easy to have a real conversation with them and gauge how they think."
  - Attribution for both: "A hiring manager in our pilot"
- Takeaway: the report gives the hiring manager a better interview, not just a screen. Every report page carries a report ID and a verify link, so a recruiter can check the file is authentic without going back to the candidate.

### The closer (navy section)
- "References usually come last. Put yours first."
- Brand line: "A good word travels."
- Primary button: CTA label.

### FAQ
Ten questions, short answers in the voice. Cover: is this a background check (no, and what it is instead) · who can be a referee · do referees need an account (no, a private link) · will recruiters see my referees' names (by role unless the referee chose to be named) · what if a referee writes something critical (every reference includes an area to grow by design; you cannot edit what they wrote) · what happens to my resume (never stored) · can I use it on job portals (plain resume there, this to people) · when do individual written responses appear (at three or more references; below that, the summary, strengths and verification facts) · how is this different from LinkedIn recommendations (those are public, chosen and displayed by you and never critical; a GoodWord reference is written for a private report, includes an area to grow by design, answers whether they would want you on their team again and travels inside your resume file) · how long is a report valid (12 months, and the file can be remade any time). No question about cost.

### Waitlist form
Carry over from `previous-index.html` exactly: heading "Get on the list.", the four fields with their POST names (`name`, `email`, `designation`, `domain`), the full domain list including "Leadership / General Management" and "Other", the consent checkbox with its exact label, the validation, the form-encoded `URLSearchParams` body, `mode: 'no-cors'`, the disabled sending state, the success and error messages, `consent: 'true'` in the payload and the consent line under the button. Do not rewrite this logic.

### Legal
Three `<details>` accordions with ids `privacy`, `terms`, `contact`, carrying the text from `previous-index.html` verbatim, with two edits only:
- Terms, "What GoodWord is": replace the sentence "The product is not yet live." with "Early access is open in batches." Set the Terms effective date to the day you build this.
- Privacy Policy: unchanged, including its effective date.
Every `#privacy`, `#terms` and `#contact` link on the page must resolve to these sections. Linking to one opens it.

### Footer
Badge + wordmark (cream "Good"), "A good word travels.", Privacy · Terms · Contact, "© 2026 GoodWord · goodword.tech".

Retired from the old page, do not bring back: "Stop letting a resume decide your career", the FILTERED stamp, "Past the AI filters", "Not a hack. An Expressway.", the credibility score, the interactive integrity builder.

## 5. Motion and interaction

Two big moments and a handful of quiet ones. The brand is dry. A page that never stops moving is not.

Rules for all motion: animate only `transform` and `opacity`. One `requestAnimationFrame` loop drives every scroll-linked value; read scroll position once per frame, then write. Nothing heavy on the scroll event. It has to stay smooth on a mid-range Android phone. Everything respects `prefers-reduced-motion: reduce`: scroll-linked pieces collapse to their finished state, rotators show their first word, reveals become plain fades.

### 5.1 The page stack (hero, the signature)
A stack of pages in perspective: two resume pages in steel, then the report pages in gold-accented white behind them, with a small gold verification seal on the top report page and a page counter pill. On load the resume pages settle in. As the visitor scrolls the first screen, the report pages slide in behind the resume one by one, the stack fans and thickens, the seal stamps and the counter ticks from "Page 1 of 2" to "Page 3 of N", where N is the real page count of the sample in `assets/sample/`. Do not hardcode 5. Scroll-linked, so scrubbing the scrollbar up disassembles it again. Nothing dissolves, nothing gets stamped rejected. Addition, not replacement: that is the argument. Build it in HTML, CSS and inline SVG, no images. On phones it sits under the copy at a smaller scale and still scrubs.

### 5.2 The comparison (the move)
One document preview and a two-position switch: "Regular resume" | "Resume Pro Max". Switching morphs the preview between two pages in steel and the full stack with report pages in gold, with the counter changing. It also swaps the bullet lists beside it. Keyboard operable (arrow keys, space), `role="radiogroup"`. Reuse the stack component from 5.1. Default position: Resume Pro Max.

### 5.3 The sample viewer
The sample's pages as images, one at a time, with previous and next controls, thumbnails, a swipe gesture on touch, arrow-key support and a page counter. A gentle slide between pages, no 3D flip. The download button sits under it. Every image has descriptive alt text. Lazy-load pages after the first.

### 5.4 The anatomy
The first report page of the sample at readable size with eight numbered hotspots positioned over the real regions. Hover or tap shows the one-line explanation; each hotspot is a focusable button, so keyboard users get the same. On phones the hotspots become a numbered list under the page image, tapping a number highlights the region.

### 5.5 Quiet moments
The hero rotator (fade and slide, four phrases, one every 2.6 seconds). Count-ups for 100+ and 3,000+ when the strip scrolls into view (ease-out cubic, 1.4 seconds). The how-it-works rail: on desktop the illustration column is sticky and the active step highlights as it passes the middle of the viewport. FAQ accordions. Subtle staggered reveals on sections. Button and link hover states. Two curved dividers only: into the navy closer and out of it. Nothing else moves.

### 5.6 The step illustrations
Four small drawn pictures, one per step of How it works, in HTML, CSS and inline SVG only. No screenshots, no photographs, no stock art. They reuse the hero's vocabulary: the same page shapes, the same steel for the resume side and gold for the report side, the same card radius and shadow.

- Step 1: five small cards fanned out, each a role label (Direct Manager, Peer, Client, Skip-level, Direct Report). Three are picked out in gold, two stay quiet.
- Step 2: an envelope opening into a short form with two text blocks, one headed "Where they excel" and one "Where they could grow", with a small gold tick for the email confirmation.
- Step 3: the two text blocks flowing into a single report page with the real section names down it.
- Step 4: the steel resume pages and the gold report pages closing into one stack, with the page counter pill.

Each animates once when it scrolls into view, a short staggered draw or fade of its parts, and sits still after. Under reduced motion they render finished.

## 6. Assets

The page draws itself. Every visual on it is HTML, CSS and inline SVG, except the sample, which is a real document. There are no app screenshots, no stock images and no illustrations from outside.

Only three files come from outside, and all three are optional at build time. Build the whole page now and treat each missing file exactly as described, so I can drop the real ones in later without touching code.

```
assets/brand/
  og-image.png     the existing 1200x630 card (also copied to the root as og-image.png)
  favicon.png      the existing GW monogram (also copied to the root)
assets/sample/
  goodword-sample-resume-pro-max.pdf     the download
  page-01.png ... page-NN.png            every page of that PDF as an image, flat, next to it
```

- Brand files: download them from the live site alongside the HTML. If either is missing, say so and carry on.
- Sample missing, which it will be on the first build: build the sample viewer and the anatomy from an HTML and CSS mock of a report. Fictional candidate Rahul Khanna, four references shown as "Direct Manager", "Peer", "Client" and "Skip-level manager", the real section names from section 4, one line of placeholder text per block, Response Integrity showing the word Strong. It must be recognisably the same document the hero stack and the comparison draw.
- Wire the real sample behind two CONFIG constants: `SAMPLE_PDF_URL = ""` and `SAMPLE_PAGE_COUNT = 0`. While `SAMPLE_PDF_URL` is empty the download button is hidden and the mock is used. When I set both, the download button appears, the viewer uses `assets/sample/page-01.png` onwards, and the hero counter reads `SAMPLE_PAGE_COUNT`. Changing those two values must be the only thing I have to do.

Images: `loading="lazy"` below the fold, width and height attributes set so nothing shifts as they load, descriptive alt text, and never scaled up past their natural size.

## 7. Carry-overs from previous-index.html

- The CONFIG block at the top of the script: `CTA_LABEL`, `WAITLIST_ENDPOINT` (the real Apps Script URL that is in the live file, not a placeholder), `SUCCESS_MESSAGE`, `ERROR_MESSAGE`. Every CTA on the page reads its text from `CTA_LABEL` through `[data-cta]`.
- The Google Analytics block, exactly as it is in the live file, same measurement ID.
- The legal text, per section 4.
- The waitlist form, per section 4.
- `robots.txt` as is. `sitemap.xml` with `lastmod` set to the build date.

## 8. Head

- `<title>`: "GoodWord | Resume Pro Max: your resume, with the proof attached"
- Meta description: one plain sentence from the concept note's one-liner plus "Join the waitlist."
- Canonical `https://goodword.tech/`.
- Open Graph and Twitter tags: title "Your resume, with the proof attached.", the description, `https://goodword.tech/og-image.png`, `summary_large_image`.
- JSON-LD: `Organization` and `WebSite` as in the live file, plus an `FAQPage` generated from the real FAQ content on the page, word for word.
- Favicon link. Preconnect to Google Fonts.

## 9. Accessibility and performance

Skip link. Semantic landmarks and one `h1`. Visible `:focus-visible` outline in gold on everything focusable. `aria-invalid` on form fields. Accordions and the comparison switch fully keyboard operable. Alt text on every image that carries meaning, empty alt on decoration. Colour contrast at least 4.5:1 for text (this is why `--goldink` exists). No layout shift from images or fonts. Target: the page is interactive within two seconds on a mid-range Android over 4G.

## 10. Before you hand it over

1. Render the page yourself with Playwright at 1440x900 and 390x844 and look at the screenshots. Fix what looks wrong before showing me.
2. Grep the visible copy of the finished `index.html`, excluding the three legal accordions and all code, for: an em dash (U+2014), "₹", " MB", "password", "ATS", "identity-verified", "rating", "free", "paid", "price", "score", "!". Fail the build on any hit except the phrase "no scores", which is required copy in the honesty list and the FAQ. Report the grep.
3. Read every sentence of visible copy once more for Oxford commas.
4. Confirm every internal link resolves, the form still posts to the live endpoint, the sample viewer and the anatomy read correctly from the mock, and the reduced-motion mode renders the finished states.
5. Hand over with a short note: what is in the folder, the exact paths and sizes of any assets I still need to drop in, and the one-line Netlify step (drag the folder onto the site's deploys page).

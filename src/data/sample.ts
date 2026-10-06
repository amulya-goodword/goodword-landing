// The sample report, taken from app.goodword.tech/sample so the site and the app show the same person.
// Aarav Mehta and his referees are fictional.

export const sample = {
  id: 'GWORD-SAMPLE',
  generated: 'Generated 2 September 2026',
  valid: 'Valid 12 months from issue',
  candidate: {
    name: 'Aarav Mehta',
    first: 'Aarav',
    role: 'Senior Product Manager',
    city: 'Bengaluru',
  },
  collected: 'References collected between July and August 2026.',
  summary:
    'Three people who worked closely with Aarav describe someone who brings order to unclear situations and whom a team trusts when the pressure is on. Each of them gave a concrete example from a different project. They agree he would grow most by delegating earlier and by keeping leadership informed in shorter, more frequent updates.',
  tally: 'All 3 referees would want Aarav on their team again.',
  tallyNote: 'Each referee was asked this privately, in their own questionnaire.',
  strengths: [
    'Turns ambiguous problems into a clear plan that the whole team can act on',
    'Stays calm and specific under delivery pressure, and keeps others calm too',
    'Invests real time in the people around him, including those who do not report to him',
    'Makes decisions from customer evidence and can show the reasoning behind them',
  ],
  growth: [
    'Can hold on to work he should hand over, especially when a deadline is close',
    'Written updates to senior stakeholders are sometimes later and longer than they need to be',
  ],
  growthNote:
    'Every GoodWord reference includes a growth area by design, and referees are asked for a real one. Its presence is a sign the feedback is candid, not a warning.',
  integrity: {
    level: 'Strong',
    levels: ['Basic', 'Moderate', 'Good', 'Strong'],
    note: 'How confident we are these are real, independent references. It comes from verification and cross-checks, never from how positive the feedback is. Based on 3 referees.',
  },
  referees: [
    {
      label: 'Neha Kapoor',
      named: true,
      role: 'Direct Manager',
      worked: 'Worked together 2 to 4 years',
      context: 'Payments product team',
      given: 'Given July 2026',
      excel:
        'Aarav is the person I gave the problems nobody had managed to frame. When our merchant onboarding numbers dropped, three teams had three different explanations. He spent a week sitting in on support calls, came back with one page that showed where merchants were actually getting stuck, and had engineering, risk and sales agree on a plan in a single meeting. Completion went from roughly half to over 70 percent in the next quarter.',
      excelShort:
        'Aarav is the person I gave the problems nobody had managed to frame.',
      grow: 'He takes on too much himself when a launch is close. On our last release he was writing test cases at midnight that two people on his team could have owned. The work got done, but they learned less than they should have. He knows this and has started to plan the handover earlier.',
    },
    {
      label: 'Referee 2',
      named: false,
      role: 'Peer',
      worked: 'Worked together 1 to 2 years',
      context: 'Engineering lead on the same product',
      given: 'Given August 2026',
      excel:
        'He does not hide behind the roadmap. When I told him a date was not realistic, he asked what we would have to cut to keep it, took that to leadership himself and came back with a decision the same day. Engineers on my team trusted him because he never promised something on our behalf without asking first.',
      excelShort:
        'Engineers on my team trusted him because he never promised something on our behalf without asking first.',
      grow: 'His updates to leadership could be shorter and more regular. He tends to wait until he has the full picture, so people outside the team sometimes heard about a risk a week after we knew about it.',
    },
    {
      label: 'Referee 3',
      named: false,
      role: 'Direct Report',
      worked: 'Worked together 1 to 2 years',
      context: 'Associate product manager in his team',
      given: 'Given August 2026',
      excel:
        'Aarav taught me how to write a problem statement before I was allowed to write a solution. He reviewed my first three documents line by line and never rewrote them for me. When I presented to the leadership team for the first time, he sat at the back and let me answer every question myself.',
      excelShort:
        'Aarav taught me how to write a problem statement before I was allowed to write a solution.',
      grow: 'He could delegate the important things sooner. I often got ownership of a piece of work only after he had already solved the hardest part of it.',
    },
  ],
};

// The "Who viewed" screen, laid out as the app shows it: grouped by the company in each viewer's work email,
// with first opened, last opened and how many times. The people and the companies are fictional.
export const viewed = {
  people: 3,
  companies: 2,
  lastOpened: '12 Sep 2026',
  groups: [
    {
      domain: 'kestrelpay.in',
      people: [
        { name: 'Ritika Sen', first: '8 Sep 2026', last: '12 Sep 2026', times: 4 },
        { name: 'Dev Malhotra', first: '9 Sep 2026', last: '10 Sep 2026', times: 2 },
      ],
    },
    {
      domain: 'northlinefreight.in',
      people: [{ name: 'Arjun Nair', first: '9 Sep 2026', last: '11 Sep 2026', times: 3 }],
    },
  ],
};

export type Referee = (typeof sample.referees)[number];

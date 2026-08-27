export interface ExperienceEntry {
  role: string
  company: string
  companyUrl: string
  period: string
  summary: string[]
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Engineer III",
    company: "GoCardless",
    companyUrl: "https://gocardless.com",
    period: "Mar 2021 – Present",
    summary: [
      "Led the front-end build of two of GoCardless's most-requested features — Protect+ and the Merchant Dashboard Reporting suite — with a measurable lift in NPS scores.",
      "Currently leading front-end work on GoCardless for Xero (GC4X), migrating it off legacy frameworks onto Next.js — cutting delivery timelines by over 55% and front-end-related support queries by half, with one migration shipped in 5 weeks instead of the usual 12, the fastest delivered to date. Introduced a standardised QA test-case framework, started a self-review habit on PRs since adopted team-wide, and patched several high-severity security vulnerabilities before they could be exploited.",
    ],
    tags: ["TypeScript", "React", "Next.js", "Cypress", "Jest", "Web Accessibility (WCAG)"],
  },
  {
    role: "Front-End Engineer",
    company: "Perkbox",
    companyUrl: "https://www.perkbox.com",
    period: "Jan 2019 – Feb 2021",
    summary: [
      "Partnered with design on a full web and mobile reskin, building a shared component library that improved consistency and sped up delivery for the whole front-end team. Ran A/B tests on copywriting to inform content strategy and increase engagement.",
    ],
    tags: ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "A/B Testing"],
  },
  {
    role: "QA Test Engineer",
    company: "Perkbox",
    companyUrl: "https://www.perkbox.com",
    period: "Apr 2015 – Dec 2018",
    summary: [
      "Built and maintained automated test suites that streamlined regression testing and shortened release cycles — eventually moving into front-end engineering after proving out strong collaboration and code quality.",
    ],
    tags: ["Cypress", "Jest", "Quality Assurance"],
  },
]

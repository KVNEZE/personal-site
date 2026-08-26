export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript (ES6+)", "React", "Next.js", "HTML5", "CSS3"],
  },
  {
    label: "Testing & Observability",
    items: ["Cypress", "Jest", "Storybook", "Sentry", "Kibana"],
  },
  {
    label: "Practices",
    items: [
      "Web Accessibility (WCAG)",
      "Frontend Architecture",
      "Web Performance",
      "Design Systems",
      "A/B Testing",
      "AI-Assisted Development",
    ],
  },
]

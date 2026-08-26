import { Section, SectionHeading } from "./Section"
import { skillGroups } from "../data/skills"

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
              {group.label}
            </h3>
            <ul className="space-y-1.5 text-ink/90">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

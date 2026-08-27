import { Section, SectionHeading } from "./Section"
import { experience } from "../data/experience"

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-14">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`}>
            <h3 className="text-lg font-semibold">
              {entry.role} ·{" "}
              <a
                href={entry.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                {entry.company}
                <span aria-hidden="true"> ↗</span>
              </a>
            </h3>
            <p className="mt-1 text-sm font-medium tracking-wide text-muted">{entry.period}</p>
            <div className="mt-3 space-y-3">
              {entry.summary.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-ink/90">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent-tint px-3 py-1 text-xs font-medium text-accent-hover"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

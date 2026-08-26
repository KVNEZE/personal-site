import { Section, SectionHeading } from "./Section"

export function Profile() {
  return (
    <Section id="about" className="pt-0">
      <SectionHeading>About</SectionHeading>
      <p className="max-w-prose text-lg leading-relaxed text-ink/90">
        I'm a front-end engineer with 7+ years' experience, having started out in QA. I mainly
        work in React and Next.js — architecting front-ends, leading large-scale framework
        migrations, and ensuring what I build is genuinely accessible. I focus on shipping work
        that improves both user experience and key metrics, while keeping delivery fast and
        support overhead low.
      </p>
    </Section>
  )
}

import { CvButton } from "./CvButton"

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-2">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight" aria-label="Kevin Eze — home">
          Kevin Eze
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        <CvButton variant="outline" />
      </div>
    </header>
  )
}

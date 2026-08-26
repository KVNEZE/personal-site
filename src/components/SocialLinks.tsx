import { MailIcon, LinkedInIcon, GitHubIcon } from "./icons"

const links = [
  { label: "Email", href: "mailto:hello@kevineze.me", Icon: MailIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevineze/", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/KVNEZE", Icon: GitHubIcon },
]

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="text-ink/70 transition-colors hover:text-accent"
          >
            <Icon className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}

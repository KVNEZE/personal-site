import { SocialLinks } from "./SocialLinks"
import { CvButton } from "./CvButton"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/10">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <SocialLinks />
          <CvButton />
        </div>
        <p className="mt-14 text-sm text-muted">© {new Date().getFullYear()} Kevin Eze</p>
      </div>
    </footer>
  )
}

import type { ReactNode } from "react"

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-2xl px-6 py-14 sm:py-20 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{children}</h2>
}

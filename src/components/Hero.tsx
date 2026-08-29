import { SocialLinks } from "./SocialLinks"

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-2xl flex-col items-start gap-8 px-6 py-16 sm:flex-row sm:items-start sm:gap-10 sm:py-24"
    >
      <h1 className="shrink-0">
        <img
          src="/kevin-signature.svg"
          alt="Kevin Eze"
          width={402}
          height={388}
          fetchPriority="high"
          className="h-72 w-auto sm:h-64 md:h-72"
        />
      </h1>
      <div className="sm:pt-4">
        <p className="font-serif text-lg text-muted sm:text-xl">
          Front-end engineer based in the UK, building accessible, high-performance web products —
          currently at GoCardless.
        </p>
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-accent-tint px-3 py-1 text-sm font-medium text-accent-hover">
          Open to remote work · relocation
        </span>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

import { DownloadIcon } from "./icons"

interface CvButtonProps {
  variant?: "solid" | "outline"
}

export function CvButton({ variant = "solid" }: CvButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
  const styles =
    variant === "solid"
      ? "bg-accent text-white hover:bg-accent-hover"
      : "border border-accent text-accent hover:bg-accent-tint"

  return (
    <a href="/Kevin-Eze-CV.pdf" download className={`${base} ${styles}`}>
      <DownloadIcon className="h-4 w-4" />
      Download CV
    </a>
  )
}

import Link from 'next/link'

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent focus:text-background focus:font-bold focus:uppercase focus:tracking-wider focus:rounded-full transition-all"
    >
      Skip to content
    </Link>
  )
}

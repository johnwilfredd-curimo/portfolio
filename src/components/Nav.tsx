import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'tools', label: 'Tools' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    if (!sections.length) return

    // A band across the upper-middle of the viewport decides the current section,
    // so the highlight changes as a heading settles under the bar.
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 sm:gap-6 sm:px-8">
        <a
          href="#top"
          className="shrink-0 font-display text-lg font-bold leading-none transition-colors hover:text-olive"
          aria-label="Back to top"
        >
          JC
        </a>

        <nav aria-label="Sections" className="min-w-0 flex-1">
          <ul className="flex items-center gap-5 overflow-x-auto [scrollbar-width:none] sm:gap-7 [&::-webkit-scrollbar]:hidden">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`block whitespace-nowrap py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                    active === l.id ? 'text-olive' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}

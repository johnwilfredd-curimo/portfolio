import { useState } from 'react'
import { MoonIcon, SunIcon } from './icons'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="shrink-0 rounded-full border border-line p-2.5 text-muted transition-colors hover:text-ink hover:border-olive cursor-pointer"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

import { siUpwork } from 'simple-icons'
import { LinkedInIcon, MailIcon, PinIcon } from './icons'

const EMAIL = 'johnwilfreddcurimo.freelance@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/john-wilfredd-curimo'
// TODO: replace with the real Upwork profile URL
const UPWORK_URL = '#'

function UpworkIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={siUpwork.path} />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line pb-10 pt-10">
      <div className="grid gap-10 sm:grid-cols-3">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-olive font-display text-lg font-bold text-bg">
            JC
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">John Wilfredd Curimo</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
              Workflow and AI Automation Specialist
            </p>
          </div>
        </div>

        <ul className="space-y-3 text-xs text-muted">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 transition-colors hover:text-ink"
            >
              <MailIcon className="h-4 w-4 shrink-0 text-olive" />
              {EMAIL}
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-ink"
            >
              <LinkedInIcon className="h-4 w-4 shrink-0 text-olive" />
              linkedin.com/in/john-wilfredd-curimo
            </a>
          </li>
          <li>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-ink"
            >
              <UpworkIcon className="h-4 w-4 shrink-0 text-olive" />
              Upwork Profile
            </a>
          </li>
          <li className="flex items-center gap-3">
            <PinIcon className="h-4 w-4 shrink-0 text-olive" />
            Philippines
          </li>
        </ul>

        <div className="sm:text-right">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Let's Connect
          </p>
          <div className="mt-4 flex gap-3 sm:justify-end">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all hover:border-olive hover:text-ink active:scale-90"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Upwork"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all hover:border-olive hover:text-ink active:scale-90"
            >
              <UpworkIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all hover:border-olive hover:text-ink active:scale-90"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-[11px] text-muted">
        © {new Date().getFullYear()} John Wilfredd Curimo
      </p>
    </footer>
  )
}

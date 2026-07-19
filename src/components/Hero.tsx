import { PinIcon } from './icons'
import { ThemeToggle } from './ThemeToggle'

function Stamp() {
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_24s_linear_infinite]">
        <defs>
          <path id="stamp-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-muted" fontSize="8.2" letterSpacing="2.2">
          <textPath href="#stamp-circle">
            THOUGHTFUL AUTOMATION · MEANINGFUL IMPACT ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-bold">
        JC
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <header className="relative">
      <div className="flex items-center gap-6 pt-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em]">
          Workflow and AI Automation Specialist &amp; Electronics Engineer
        </p>
        <div className="h-px flex-1 bg-line" />
        <ThemeToggle />
      </div>

      <div className="relative mt-8">
        <h1 className="font-display text-[clamp(2.4rem,9vw,7.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
          John Wilfredd
          <br />
          Curimo
        </h1>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-md">
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              I build automations that <em className="text-olive">save time</em> and{' '}
              <em className="text-olive">scale businesses</em>.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Hi, I'm a Workflow and AI Automation Specialist and Electronics Engineer. I
              help businesses eliminate repetitive work by designing reliable, scalable
              workflows with Make, n8n, Zapier, and GoHighLevel, augmented with Python, API
              integrations, and AI-powered logic.
            </p>
          </div>

          <div className="relative flex flex-col items-center lg:items-end">
            <img
              src={`${import.meta.env.BASE_URL}profile.webp`}
              alt="John Wilfredd Curimo"
              className="relative z-10 mt-2 w-64 sm:w-80 lg:-mt-72 lg:mr-24 lg:w-[24rem]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
              }}
            />
            <div className="absolute right-0 top-4 z-20 hidden lg:block">
              <Stamp />
            </div>
            <div className="z-10 mt-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] lg:mr-24">
              <PinIcon className="h-4 w-4 text-olive" />
              Philippines
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

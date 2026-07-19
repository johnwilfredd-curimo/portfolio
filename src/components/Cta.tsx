import { MailIcon } from './icons'

export function Cta() {
  return (
    <section className="mt-20 rounded-2xl bg-olive-deep px-8 py-9 text-[#f6f2eb] sm:px-10">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        <div className="flex items-center gap-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f6f2eb]/40">
            <MailIcon />
          </span>
          <h3 className="font-display text-2xl leading-snug">
            Let's automate something <em>meaningful</em> together.
          </h3>
        </div>
        <p className="text-sm text-[#f6f2eb]/80 lg:ml-auto lg:max-w-52">
          I'm available for freelance automation projects and collaborations.
        </p>
        <a
          href="mailto:johnwilfreddcurimo.freelance@gmail.com"
          className="rounded-full border border-[#f6f2eb]/60 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all hover:bg-[#f6f2eb] hover:text-olive-deep active:scale-95"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

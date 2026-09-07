import { ArrowRightIcon, PlugIcon, SparkleIcon, UsersIcon, ZapIcon } from './icons'

const services = [
  {
    icon: ZapIcon,
    title: 'Workflow Automation',
    desc: 'End-to-end automations with Zapier, Make, n8n, and GoHighLevel that eliminate repetitive work.',
  },
  {
    icon: SparkleIcon,
    title: 'AI Integration',
    desc: 'OpenAI and Claude APIs, AI voice agents, and LLM-powered logic inside your workflows.',
  },
  {
    icon: UsersIcon,
    title: 'CRM & Lead Management',
    desc: 'GoHighLevel setups, lead scoring, and automated follow-up sequences that convert.',
  },
  {
    icon: PlugIcon,
    title: 'API & Custom Integrations',
    desc: 'Webhooks, REST APIs, Python scripting, and SQL to connect anything to anything.',
  },
]

export function Services() {
  return (
    <section id="services" className="mt-20 scroll-mt-24">
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">Services</h3>
        <div className="h-px flex-1 bg-line" />
        <a
          href="#tools"
          className="flex shrink-0 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
        >
          And more <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-olive text-bg">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wide">{title}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

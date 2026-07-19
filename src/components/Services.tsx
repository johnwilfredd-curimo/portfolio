import { ArrowRightIcon, PlugIcon, SparkleIcon, UsersIcon, ZapIcon } from './icons'

const services = [
  {
    icon: ZapIcon,
    title: 'Workflow Automation',
    desc: 'End-to-end automations with Zapier, Make, and n8n that eliminate repetitive work.',
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
    <aside>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">Services</h3>
      <ul className="mt-8 space-y-7">
        {services.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-olive text-bg">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <a
        href="#tools"
        className="mt-8 flex items-center justify-end gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
      >
        And more <ArrowRightIcon className="h-4 w-4" />
      </a>
    </aside>
  )
}

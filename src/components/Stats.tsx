import { LayersIcon, MonitorIcon, PlugIcon } from './icons'

const stats = [
  { icon: MonitorIcon, value: '12+', label: 'Automation Projects Built' },
  { icon: PlugIcon, value: '15+', label: 'Apps & APIs Integrated' },
  { icon: LayersIcon, value: '4', label: 'Automation Platforms' },
]

export function Stats() {
  return (
    <section className="mt-12 rounded-2xl border border-line bg-surface px-6 py-7 sm:px-10">
      <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-line">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4 sm:justify-center">
            <Icon className="h-7 w-7 text-olive" />
            <div>
              <p className="text-lg font-semibold">{value}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

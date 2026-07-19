import { Fragment } from 'react'
import { ArrowRightIcon } from './icons'

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand your workflow, goals, and bottlenecks.' },
  { num: '02', title: 'Map', desc: 'Design the automation blueprint and data flow.' },
  { num: '03', title: 'Build', desc: 'Connect apps, APIs, and AI into a working system.' },
  { num: '04', title: 'Test', desc: 'Run edge cases until every path is reliable.' },
  { num: '05', title: 'Launch', desc: 'Deploy, monitor, and refine as you scale.' },
]

export function Process() {
  return (
    <section className="mt-20">
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">My Process</h3>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(9,auto)] lg:items-start lg:justify-between lg:gap-2">
        {steps.map((step, i) => (
          <Fragment key={step.num}>
            <div className="lg:max-w-36">
              <p className="font-display text-2xl">{step.num}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em]">{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRightIcon className="mt-2 hidden h-4 w-4 text-muted lg:block" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  )
}

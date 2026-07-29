import { useState } from 'react'
import { ArrowRightIcon } from './icons'

const base = import.meta.env.BASE_URL

const featured = [
  {
    name: 'AI Voice Receptionist',
    subtitle: 'Vapi Voice Agent · n8n',
    img: `${base}projects/n8n-receptionist.webp`,
    alt: 'n8n workflow canvas for the AI voice receptionist with booking, update, and cancel flows',
  },
  {
    name: 'CacaousTech',
    subtitle: 'Embedded ML Classifier',
    img: `${base}projects/cacaoustech.webp`,
    alt: 'Handheld cacao pod maturity classification device tested in the field',
  },
  {
    name: 'Asana CRM Lead Management',
    subtitle: 'CRM Workflow · Zapier',
    img: `${base}projects/zapier-asana.webp`,
    alt: 'Zapier workflow automating Asana CRM lead stages',
  },
]

const allProjects = [
  {
    tool: 'Zapier',
    name: 'AI Content Repurposing',
    img: `${base}projects/zapier-content.webp`,
    desc: 'Turns audio/video uploads into transcripts, two blog posts, and LinkedIn content via the OpenAI API, with filter and path branching plus Google Sheets logging.',
  },
  {
    tool: 'Zapier',
    name: 'Asana CRM Lead Management',
    img: `${base}projects/zapier-asana.webp`,
    desc: 'Five stage-based CRM automations: Drive folder creation, escalating follow-ups, weekly quote reminders, welcome emails with PDF attachments, and conditional service-recommendation emails.',
  },
  {
    tool: 'Zapier',
    name: 'Automated Lead Enrichment',
    img: `${base}projects/zapier-leads.webp`,
    desc: 'Real-time webhook workflow that enriches leads via the Apollo API, scores and prioritizes them into paths, logs to Google Sheets, alerts the sales team in Slack, and drafts AI outreach emails.',
  },
  {
    tool: 'Make',
    name: 'Xero Transactions Export',
    img: `${base}projects/make-xero.webp`,
    desc: 'Asana task completion triggers Xero API retrieval of a full year of transaction data, formatted into a report-matching CSV and attached to the completed task.',
  },
  {
    tool: 'Make',
    name: 'AI Gmail Attachment Sorter',
    img: `${base}projects/make-gmail.webp`,
    desc: 'AI reviews PDF, DOCX, XLSX, and CSV attachments, generates descriptive filenames, uploads renamed files to Google Drive, and logs results in Google Sheets.',
  },
  {
    tool: 'n8n',
    name: 'ASMR Video Creator',
    img: `${base}projects/n8n-asmr.webp`,
    desc: 'Automated AI video generation with hands-free publishing to a Facebook page and YouTube channel.',
  },
  {
    tool: 'n8n',
    name: 'AI Voice Receptionist',
    img: `${base}projects/n8n-receptionist.webp`,
    desc: 'Vapi voice agent integrated with Google Calendar and Airtable to handle call answering and appointment scheduling for a multi-specialty health clinic scenario.',
  },
  {
    tool: 'n8n',
    name: 'Sales Data Pipeline',
    img: `${base}projects/n8n-sales-pipeline.webp`,
    desc: 'n8n Academy Foundations course project: a branching pipeline that fetches 50 sales orders over authenticated HTTP (Header Auth), splits and transforms them with calculated order totals, then fans out to three branches — a full order feed, regional revenue summaries (filter delivered → summarize → rename keys), and a generated CSV report — each posted to warehouse endpoints.',
  },
]

export function Works() {
  const [showAll, setShowAll] = useState(false)

  return (
    <div>
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">
          Selected Works
        </h3>
        <div className="h-px flex-1 bg-line" />
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex cursor-pointer items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted transition-all hover:text-ink active:scale-95"
        >
          {showAll ? 'Hide project list' : 'View all projects'}
          <ArrowRightIcon className={`h-4 w-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
        </button>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {featured.map((work) => (
          <figure key={work.name} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              <img
                src={work.img}
                alt={work.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-4">
              <p className="text-sm font-semibold uppercase tracking-wide">{work.name}</p>
              <p className="mt-1 text-xs text-muted">{work.subtitle}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {showAll && (
        <div id="all-projects" className="mt-10 rounded-xl border border-line bg-surface p-6 sm:p-8">
          <p className="text-xs italic text-muted">
            Self-directed practice and course/certification projects; not commissioned client
            work.
          </p>
          <ul className="mt-6 space-y-7">
            {allProjects.map((p) => (
              <li key={p.name} className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                <img
                  src={p.img}
                  alt={`${p.name} workflow screenshot`}
                  loading="lazy"
                  className="h-24 w-full shrink-0 rounded-lg border border-line object-cover object-top sm:w-40"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold">{p.name}</p>
                    <span className="rounded-full border border-olive px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-olive">
                      {p.tool}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

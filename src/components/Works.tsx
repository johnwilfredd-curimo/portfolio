import { useState } from 'react'
import { ArrowRightIcon } from './icons'

const featured = [
  {
    name: 'CacaousTech',
    subtitle: 'Embedded ML Classifier',
    year: '2024',
    cover: (
      <div className="flex h-full flex-col items-center justify-center border border-line bg-surface-2 p-6 text-center">
        <div className="flex h-full w-full flex-col items-center justify-center border border-ink/20 p-4">
          <p className="font-display text-2xl leading-tight">
            Cacaous
            <br />
            Tech
          </p>
          <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-muted">
            94% Accuracy · TFLite Micro
          </p>
        </div>
      </div>
    ),
  },
  {
    name: 'AI Receptionist',
    subtitle: 'Vapi Voice Agent · n8n',
    year: '2025',
    cover: (
      <div className="flex h-full flex-col items-center justify-center bg-[#26231e] p-6 text-center dark:border dark:border-line">
        <p className="font-display text-2xl italic leading-tight text-[#ede8df]">
          AI
          <br />
          Receptionist
        </p>
        <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-[#a39b8e]">
          Voice · Calendar · Airtable
        </p>
      </div>
    ),
  },
  {
    name: 'Lead Engine',
    subtitle: 'Enrichment Workflow · n8n',
    year: '2025',
    cover: (
      <div className="flex h-full flex-col items-center justify-center border border-line bg-surface p-6 text-center">
        <p className="font-display text-3xl font-bold uppercase tracking-tight text-olive">
          Lead
          <br />
          Engine
        </p>
        <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-muted">
          Webhook → Score → SQL
        </p>
      </div>
    ),
  },
]

const allProjects = [
  {
    tool: 'Zapier',
    name: 'AI Content Repurposing',
    desc: 'Turns audio/video uploads into transcripts, two blog posts, and LinkedIn content via the OpenAI API, with filter and path branching plus Google Sheets logging.',
  },
  {
    tool: 'Zapier',
    name: 'Asana CRM Lead Management',
    desc: 'Five stage-based CRM automations: Drive folder creation, escalating follow-ups, weekly quote reminders, welcome emails with PDF attachments, and conditional service-recommendation emails.',
  },
  {
    tool: 'n8n',
    name: 'Automated Lead Enrichment',
    desc: 'Real-time webhook workflow that enriches leads via an external API, scores and prioritizes them, stores records in SQL, alerts the sales team, and drafts AI outreach emails.',
  },
  {
    tool: 'Make',
    name: 'Xero Transactions Export',
    desc: 'Asana task completion triggers Xero API retrieval of a full year of transaction data, formatted into a report-matching CSV and attached to the completed task.',
  },
  {
    tool: 'Make',
    name: 'AI Gmail Attachment Sorter',
    desc: 'AI reviews PDF, DOCX, XLSX, and CSV attachments, generates descriptive filenames, uploads renamed files to Google Drive, and logs results in Google Sheets.',
  },
  {
    tool: 'n8n',
    name: 'ASMR Video Creator',
    desc: 'Automated AI video generation with hands-free publishing to a Facebook page and YouTube channel.',
  },
  {
    tool: 'n8n',
    name: 'AI Receptionist',
    desc: 'Vapi voice agent integrated with Google Calendar and Airtable to handle call answering and appointment scheduling for a multi-specialty health clinic scenario.',
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
          className="flex cursor-pointer items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
        >
          {showAll ? 'Hide project list' : 'View all projects'}
          <ArrowRightIcon className={`h-4 w-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
        </button>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {featured.map((work) => (
          <figure key={work.name}>
            <div className="aspect-[3/4] overflow-hidden rounded-xl">{work.cover}</div>
            <figcaption className="mt-4">
              <p className="text-sm font-semibold uppercase tracking-wide">{work.name}</p>
              <p className="mt-1 text-xs text-muted">{work.subtitle}</p>
              <p className="mt-1 text-xs text-muted">{work.year}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {showAll && (
        <div id="all-projects" className="mt-10 rounded-xl border border-line bg-surface p-6 sm:p-8">
          <p className="text-xs italic text-muted">
            Self-directed builds developed from real-world client briefs; not commissioned client
            work.
          </p>
          <ul className="mt-6 space-y-5">
            {allProjects.map((p) => (
              <li key={p.name} className="flex flex-col gap-2 sm:flex-row sm:gap-5">
                <span className="h-fit w-fit shrink-0 rounded-full border border-olive px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-olive sm:mt-0.5 sm:w-20 sm:text-center">
                  {p.tool}
                </span>
                <div>
                  <p className="text-sm font-semibold">{p.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

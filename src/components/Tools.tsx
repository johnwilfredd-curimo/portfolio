import {
  siAirtable,
  siArduino,
  siAsana,
  siClaude,
  siCplusplus,
  siGoogle,
  siGooglecolab,
  siGooglesheets,
  siMake,
  siN8n,
  siNotion,
  siPython,
  siTensorflow,
  siXero,
  siZapier,
  type SimpleIcon,
} from 'simple-icons'

type Tool = {
  name: string
  icon?: SimpleIcon
  /** shown when no brand icon is available */
  initials?: string
}

const tools: Tool[] = [
  { name: 'Zapier', icon: siZapier },
  { name: 'Make (Integromat)', icon: siMake },
  { name: 'n8n', icon: siN8n },
  { name: 'GoHighLevel', initials: 'GH' },
  { name: 'OpenAI API', initials: 'AI' },
  { name: 'Claude API', icon: siClaude },
  { name: 'Vapi', initials: 'V' },
  { name: 'Python', icon: siPython },
  { name: 'C/C++', icon: siCplusplus },
  { name: 'MATLAB', initials: 'M' },
  { name: 'SQL', initials: 'DB' },
  { name: 'REST APIs', initials: 'API' },
  { name: 'Webhooks', initials: 'WH' },
  { name: 'OAuth', initials: 'OA' },
  { name: 'Google Workspace', icon: siGoogle },
  { name: 'Google Sheets', icon: siGooglesheets },
  { name: 'Google Colab', icon: siGooglecolab },
  { name: 'Airtable', icon: siAirtable },
  { name: 'Notion', icon: siNotion },
  { name: 'Slack', initials: 'S' },
  { name: 'Asana', icon: siAsana },
  { name: 'Xero', icon: siXero },
  { name: 'TFLite Micro', icon: siTensorflow },
  { name: 'Arduino', icon: siArduino },
]

function isDarkHex(hex: string) {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return 0.299 * r + 0.587 * g + 0.114 * b < 60
}

function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-ink transition-transform duration-200 hover:-translate-y-0.5 hover:border-olive">
      {tool.icon ? (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0"
          fill={isDarkHex(tool.icon.hex) ? 'currentColor' : `#${tool.icon.hex}`}
          aria-hidden="true"
        >
          <path d={tool.icon.path} />
        </svg>
      ) : (
        <span className="flex h-3.5 min-w-3.5 shrink-0 items-center justify-center rounded-[4px] bg-olive px-0.5 text-[7px] font-bold leading-none text-bg">
          {tool.initials}
        </span>
      )}
      {tool.name}
    </span>
  )
}

export function Tools() {
  return (
    <section id="tools" className="mt-20 scroll-mt-10">
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">
          Tools &amp; Technologies
        </h3>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {tools.map((t) => (
          <ToolBadge key={t.name} tool={t} />
        ))}
      </div>
    </section>
  )
}

import {
  siAirtable,
  siArduino,
  siAsana,
  siClaude,
  siCplusplus,
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siGoogle,
  siGooglecolab,
  siGooglesheets,
  siJupyter,
  siLinux,
  siMake,
  siMlflow,
  siN8n,
  siNotion,
  siNumpy,
  siOptuna,
  siPandas,
  siPostman,
  siPydantic,
  siPython,
  siScikitlearn,
  siStreamlit,
  siTensorflow,
  siTraefikproxy,
  siTrello,
  siXero,
  siZapier,
  type SimpleIcon,
} from 'simple-icons'
import {
  awsMark,
  goHighLevelImg,
  groqArt,
  matlabMark,
  matplotlibMark,
  openAiMark,
  seabornMark,
  slackMark,
  vapiArt,
  xgboostImg,
  type BrandArt,
  type BrandMark,
} from './brandMarks'

type Tool = {
  name: string
  icon?: SimpleIcon
  /** brand mark for tools simple-icons no longer ships (see brandMarks.ts) */
  mark?: BrandMark
  /** full-colour brand art rendered with its own palette */
  art?: BrandArt
  /** raster mark for vendors publishing no usable compact SVG */
  img?: string
  /** shown when no brand logo exists at all */
  initials?: string
}

type ToolGroup = {
  label: string
  tools: Tool[]
}

const groups: ToolGroup[] = [
  {
    label: 'Automation & Integration',
    tools: [
      { name: 'Zapier', icon: siZapier },
      { name: 'Make (Integromat)', icon: siMake },
      { name: 'n8n', icon: siN8n },
      { name: 'GoHighLevel', img: goHighLevelImg },
      { name: 'REST APIs', initials: 'API' },
      { name: 'Postman', icon: siPostman },
      { name: 'Webhooks', initials: 'WH' },
      { name: 'OAuth', initials: 'OA' },
    ],
  },
  {
    label: 'AI & LLMs',
    tools: [
      { name: 'OpenAI API', mark: openAiMark },
      { name: 'Claude API', icon: siClaude },
      { name: 'Groq', art: groqArt },
      { name: 'Vapi', art: vapiArt },
    ],
  },
  {
    label: 'Machine Learning & Data',
    tools: [
      { name: 'scikit-learn', icon: siScikitlearn },
      { name: 'XGBoost', img: xgboostImg },
      { name: 'Optuna', icon: siOptuna },
      { name: 'NumPy', icon: siNumpy },
      { name: 'pandas', icon: siPandas },
      { name: 'Matplotlib', mark: matplotlibMark },
      { name: 'Seaborn', mark: seabornMark },
      { name: 'Jupyter', icon: siJupyter },
      { name: 'MLflow', icon: siMlflow },
      { name: 'AWS SageMaker', mark: awsMark },
      { name: 'imbalanced-learn', initials: 'IL' },
      { name: 'FastAPI', icon: siFastapi },
      { name: 'Pydantic', icon: siPydantic },
      { name: 'Streamlit', icon: siStreamlit },
    ],
  },
  {
    label: 'Deployment & DevOps',
    tools: [
      { name: 'Docker', icon: siDocker },
      { name: 'Traefik', icon: siTraefikproxy },
      { name: 'Linux VPS', icon: siLinux },
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
    ],
  },
  {
    label: 'Languages',
    tools: [
      { name: 'Python', icon: siPython },
      { name: 'C/C++', icon: siCplusplus },
      { name: 'MATLAB', mark: matlabMark },
      { name: 'SQL', initials: 'DB' },
    ],
  },
  {
    label: 'Apps & Workspace',
    tools: [
      { name: 'Google Workspace', icon: siGoogle },
      { name: 'Google Sheets', icon: siGooglesheets },
      { name: 'Google Colab', icon: siGooglecolab },
      { name: 'Airtable', icon: siAirtable },
      { name: 'Notion', icon: siNotion },
      { name: 'Slack', mark: slackMark },
      { name: 'Asana', icon: siAsana },
      { name: 'Trello', icon: siTrello },
      { name: 'Xero', icon: siXero },
    ],
  },
  {
    label: 'Embedded & Hardware',
    tools: [
      { name: 'TFLite Micro', icon: siTensorflow },
      { name: 'Arduino', icon: siArduino },
    ],
  },
]

function isDarkHex(hex: string) {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return 0.299 * r + 0.587 * g + 0.114 * b < 60
}

function ToolBadge({ tool }: { tool: Tool }) {
  const glyph = tool.icon
    ? { viewBox: '0 0 24 24', hex: tool.icon.hex, paths: [tool.icon.path] }
    : tool.mark

  return (
    <span className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-ink transition-transform duration-200 hover:-translate-y-0.5 hover:border-olive">
      {glyph ? (
        <svg
          viewBox={glyph.viewBox}
          className="h-3.5 w-3.5 shrink-0"
          fill={isDarkHex(glyph.hex) ? 'currentColor' : `#${glyph.hex}`}
          aria-hidden="true"
        >
          {glyph.paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      ) : tool.art ? (
        <svg
          viewBox={tool.art.viewBox}
          className="h-3.5 w-3.5 shrink-0 overflow-hidden rounded-[3px]"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: tool.art.markup }}
        />
      ) : tool.img ? (
        <img src={tool.img} alt="" aria-hidden="true" className="h-3.5 w-3.5 shrink-0 object-contain" />
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
    <section id="tools" className="mt-20 scroll-mt-24">
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">
          Tools &amp; Technologies
        </h3>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-8 space-y-7">
        {groups.map((g) => (
          <div key={g.label} className="grid gap-2.5 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <p className="pt-1.5 text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-muted">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {g.tools.map((t) => (
                <ToolBadge key={t.name} tool={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

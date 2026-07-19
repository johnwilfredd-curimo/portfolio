const tools = [
  'Zapier',
  'Make (Integromat)',
  'n8n',
  'GoHighLevel',
  'OpenAI API',
  'Claude API',
  'Vapi',
  'Python',
  'C/C++',
  'MATLAB',
  'SQL',
  'REST APIs',
  'Webhooks',
  'OAuth',
  'Google Workspace',
  'Google Sheets',
  'Google Colab',
  'Airtable',
  'Notion',
  'Slack',
  'Asana',
  'Xero',
  'TFLite Micro',
  'Arduino',
]

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
          <span
            key={t}
            className="rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-ink"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}

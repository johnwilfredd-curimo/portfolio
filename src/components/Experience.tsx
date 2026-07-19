const entries = [
  {
    initials: 'AH',
    text: "John had been exceptional in his handling of enquiries relating to QLD Senior Maths resources. His emails were polite and helpful, and his responses were fast — he was switched on and knew his stuff really well. John should be recognised by his manager as being a fine ambassador for Pearson.",
    name: 'Special Commendation',
    org: "Teacher, All Hallows' School (Brisbane) · APAC Customer Service Champions",
  },
  {
    initials: 'PBS',
    text: 'Executed live stream broadcasts with real-time multi-source integration, and minimized infrastructure downtime through proactive maintenance of broadcast hardware.',
    name: 'Engineering Intern',
    org: 'Presidential Broadcast Services · 2025',
  },
  {
    initials: 'TU',
    text: 'Sustained a top-performer rating for 5 consecutive years with 100% policy compliance on high-stakes content — while completing an engineering degree at the same time.',
    name: 'Content Moderator',
    org: 'TaskUs · 2020–2025',
  },
  {
    initials: 'ECE',
    text: "BS Electronics & Communications Engineering (Dean's Lister). Machine Learning Specialization — Stanford Online. Classification Methods with ML — MathWorks.",
    name: 'Education & Certifications',
    org: 'Technological Institute of the Philippines',
  },
]

export function Experience() {
  return (
    <section className="mt-20">
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">
          Experience &amp; Credentials
        </h3>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {entries.map((e) => (
          <article
            key={e.name}
            className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="font-display text-3xl leading-none text-olive">&ldquo;</p>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{e.text}</p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-olive text-[10px] font-bold text-bg">
                {e.initials}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">{e.name}</p>
                <p className="mt-0.5 text-[11px] text-muted">{e.org}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}

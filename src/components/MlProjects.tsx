import { ExternalLinkIcon } from './icons'

const base = import.meta.env.BASE_URL

type MlProject = {
  name: string
  subtitle: string
  img: string
  alt: string
  points: string[]
  tryThis: string
  stack: string[]
  links: { label: string; href: string }[]
}

const projects: MlProject[] = [
  {
    name: 'Health Insurance Premium Prediction',
    subtitle: 'Regression · segmented model',
    img: `${base}projects/ml-insurance.webp`,
    alt: 'Streamlit app predicting an annual health insurance premium from customer details',
    points: [
      'Quotes an annual premium on the spot instead of waiting on an underwriter.',
      'The brief required 95% of quotes within 10% of the real price, not just a good average.',
      'One model missed that on 30% of customers, almost all of them under 25.',
      'The fix was a data request, not a new algorithm: adding genetical_risk cut extreme errors from 73% to 2%.',
    ],
    tryThis: 'Set Smoking Status to Regular and watch the premium jump.',
    stack: ['scikit-learn', 'XGBoost', 'Streamlit', 'FastAPI'],
    links: [
      { label: 'Live demo', href: 'https://health-insurance-premium-jwc.streamlit.app/' },
      { label: 'API docs', href: 'https://insurance-api.srv1818955.hstgr.cloud/docs' },
      { label: 'Code', href: 'https://github.com/johnwilfredd-curimo/health-insurance-premium-prediction' },
      {
        label: 'Notebook',
        href: 'https://nbviewer.org/github/johnwilfredd-curimo/health-insurance-premium-prediction/blob/main/notebooks/health_insurance_premium_prediction.ipynb',
      },
    ],
  },
  {
    name: 'Credit Risk Modelling',
    subtitle: 'Classification · 300-900 credit score',
    img: `${base}projects/ml-credit-risk.webp`,
    alt: 'Streamlit app scoring a loan applicant and returning a credit score and rating',
    points: [
      'Turns a default probability into a 300-900 credit score a loan officer can act on.',
      'Only 8.6% of loans defaulted, so 91% accuracy is worthless. Judged on AUC, Gini, KS and rank ordering instead.',
      'ROC-AUC 0.984, Gini 0.967, KS 85.98% at decile 8, with rank ordering holding across every decile.',
      'Logistic Regression over XGBoost on purpose: the brief made explainability a deliverable, and coefficients are what make the score formula possible.',
    ],
    tryThis: 'Push the loan amount past the income and watch the score fall.',
    stack: ['scikit-learn', 'Optuna', 'imbalanced-learn', 'FastAPI'],
    links: [
      { label: 'Live demo', href: 'https://credit-risk-modelling-jwc.streamlit.app/' },
      { label: 'API docs', href: 'https://credit-api.srv1818955.hstgr.cloud/docs' },
      { label: 'Code', href: 'https://github.com/johnwilfredd-curimo/credit-risk-modelling' },
      {
        label: 'Notebook',
        href: 'https://nbviewer.org/github/johnwilfredd-curimo/credit-risk-modelling/blob/main/notebooks/credit_risk_modelling.ipynb',
      },
    ],
  },
]

export function MlProjects() {
  return (
    <section id="ml" className="mt-20 scroll-mt-24">
      <div className="flex items-center gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-olive">
          Machine Learning Projects
        </h3>
        <div className="h-px flex-1 bg-line" />
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
        Both are served two ways over one shared prediction module: a Streamlit app for people, a FastAPI
        service for software, with a committed Postman suite covering the response contract and its
        validation failures.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden border-b border-line bg-bg">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h4 className="text-base font-semibold leading-snug">{p.name}</h4>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">{p.subtitle}</p>

              <ul className="mt-4 space-y-2">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-xs leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-lg border border-olive/40 bg-olive/5 px-3 py-2 text-xs leading-relaxed">
                <span className="font-semibold uppercase tracking-[0.15em] text-olive">Try this</span>
                <span className="mt-1 block text-muted">{p.tryThis}</span>
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                {p.links.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors ${
                      i === 0 ? 'text-olive hover:text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {l.label}
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs italic text-muted">
        Rebuilds of two Codebasics course capstones. The brief and dataset are the course&rsquo;s; the
        lifecycle structure, analysis, serving layer, API, tests and deployment are mine. Self-directed
        learning projects, not commissioned client work. The live demos sleep when idle and may take a
        moment to wake.
      </p>
    </section>
  )
}

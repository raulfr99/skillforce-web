import { riga } from '../data/services.js'

export default function Riga() {
  return (
    <section id="riga" className="bg-brand-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
            {riga.fullName}
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{riga.name}</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
            {riga.description}
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {riga.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {riga.modules.map((module) => (
            <div
              key={module.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-400/50 hover:bg-brand-500/10"
            >
              <h3 className="text-lg font-bold tracking-widest text-brand-300 group-hover:text-brand-200">
                {module.name}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

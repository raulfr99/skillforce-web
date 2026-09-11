import { riga } from '../data/services.js'
import Reveal from './Reveal.jsx'

const moduleIcons = {
  LEGAL:   'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  FILE:    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  CONTROL: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  NEWS:    'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z',
}

export default function Riga() {
  return (
    <section id="riga" className="relative overflow-hidden bg-brand-950 py-20 text-white md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
              {riga.fullName}
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{riga.name}</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
              {riga.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {riga.features.map((feature, i) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 ring-1 ring-brand-500/40">
                  <svg className="h-3 w-3 text-brand-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {riga.modules.map((module, i) => (
            <Reveal key={module.name} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-brand-400/40 hover:bg-brand-500/10 hover:shadow-lg hover:shadow-brand-500/10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 ring-1 ring-brand-500/30 transition duration-300 group-hover:bg-brand-500/30 group-hover:ring-brand-400/50">
                  <svg className="h-5 w-5 text-brand-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={moduleIcons[module.name] ?? moduleIcons.LEGAL} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold tracking-widest text-brand-300 transition duration-300 group-hover:text-brand-200">
                  {module.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {module.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

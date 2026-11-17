import { about } from '../data/services.js'
import Reveal from './Reveal.jsx'

// Íconos inline, misma geometría que Platforms.
const icons = {
  'Maquila de Nómina':
    'M4 7h16M4 12h16M4 17h10',
  'Servicios Especializados (REPSE)':
    'M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z M9 12l2 2 4-4',
  'Reclutamiento y selección':
    'M8 10a4 4 0 118 0 4 4 0 01-8 0z M3 21a7 7 0 0114 0',
  'Servicios Profesionales':
    'M5 7h14l-1 12H6L5 7z M9 7V5a3 3 0 016 0v2',
  'Soluciones de pago':
    'M3 7h18v10H3z M3 11h18 M7 15h3',
  'Otros servicios':
    'M12 2v6 M12 16v6 M2 12h6 M16 12h6 M5 5l4 4 M15 15l4 4 M5 19l4-4 M15 9l4-4',
}

function ServiceGlyph({ name }) {
  const paths = (icons[name] ?? icons['Otros servicios']).split(' M')
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((p, i) => (
        <path key={i} d={i === 0 ? p : `M${p}`} />
      ))}
    </svg>
  )
}

export default function About() {
  return (
    <section
      id="skillforce"
      className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-28"
    >
      {/* Retícula puntuada muy sutil, nada de blur washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-dots opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado + datos */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-300">
              <span>04</span>
              <span className="h-px w-8 bg-accent-500/50" aria-hidden />
              <span>Quiénes somos</span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-[3.25rem]">
              {about.name}
            </h2>

            <p className="live-bar mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70">
              {about.intro}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Operando desde
                </span>
                <span className="font-display text-3xl font-semibold text-accent-300 tabular-nums">
                  2010
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Experiencia
                </span>
                <span className="font-display text-3xl font-semibold text-accent-300 tabular-nums">
                  15 años
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Nóminas / mes
                </span>
                <span className="font-display text-3xl font-semibold text-accent-300 tabular-nums">
                  25,842
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Beneficios: sin tarjetas, en una lista limpia a dos columnas */}
        <Reveal>
          <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl font-semibold leading-tight">
                Por qué operar con nosotros
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
                {about.description}
              </p>
            </div>
            <ul className="md:col-span-8 grid gap-0 border-l border-white/10">
              {about.benefits.map((benefit, i) => (
                <li
                  key={benefit}
                  className="group relative flex items-start gap-5 border-b border-white/10 px-6 py-5 transition duration-300 hover:bg-white/[0.03] last:border-b-0"
                >
                  <span className="font-mono text-[11px] text-white/35 tabular-nums">
                    B.{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/85">
                    {benefit}
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto h-px w-6 self-center bg-white/15 transition duration-300 group-hover:w-10 group-hover:bg-accent-400"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Portafolio de servicios */}
        <Reveal>
          <div className="mt-20">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-300">
                Portafolio
              </span>
              <span className="rule-tech flex-1" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                06 áreas
              </span>
            </div>

            <ul className="mt-10 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
              {about.services.map((service, i) => (
                <li
                  key={service.name}
                  className="group relative flex flex-col gap-4 bg-ink-950 p-7 transition duration-300 hover:bg-ink-900"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/15 text-accent-300 transition duration-300 group-hover:border-accent-400 group-hover:text-accent-200">
                      <span className="h-5 w-5">
                        <ServiceGlyph name={service.name} />
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 tabular-nums">
                      P.{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white">
                    {service.name}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

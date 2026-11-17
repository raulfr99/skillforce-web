import { Link, useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services.js'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return <Navigate to="/" replace />
  }

  const index = services.findIndex((s) => s.id === id)
  const chapter = String(index + 1).padStart(2, '0')

  return (
    <main className="bg-white dark:bg-ink-950">
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <img
          src={service.hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale-[0.4]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/65 to-ink-950"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-dots opacity-[0.08]"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-32 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60"
          >
            <Link to="/" className="transition hover:text-white">
              Inicio
            </Link>
            <span aria-hidden className="text-white/30">/</span>
            <Link to="/#servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <span aria-hidden className="text-white/30">/</span>
            <span className="text-accent-300">{chapter}</span>
          </nav>

          <h1 className="mt-10 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-[3.5rem]">
            {service.name}
          </h1>

          <p className="live-bar mt-8 max-w-2xl text-base leading-relaxed text-white/75">
            {service.short}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel-500 dark:text-steel-300">
                  Capítulo {chapter}
                </span>
                <p className="mt-4 text-[13px] leading-relaxed text-steel-600 dark:text-steel-300">
                  {service.intro}
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              {service.sections.map((section, i) => (
                <div
                  key={section.title}
                  className={i === 0 ? '' : 'mt-14 border-t border-steel-200 pt-14 dark:border-ink-700'}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-300 tabular-nums">
                      {chapter}.{String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-2xl font-semibold leading-tight text-ink-900 dark:text-white sm:text-[1.75rem]">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-0 border-t border-steel-200 dark:border-ink-700">
                    {section.items.map((item, k) => (
                      <li
                        key={item}
                        className="group flex items-start gap-4 border-b border-steel-200 py-4 text-[15px] leading-relaxed text-ink-800 transition duration-300 hover:bg-steel-50 dark:border-ink-700 dark:text-white/85 dark:hover:bg-ink-900"
                      >
                        <span className="w-10 pt-0.5 font-mono text-[10px] text-steel-400 tabular-nums dark:text-steel-300">
                          {String(k + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 pr-2">{item}</span>
                        <span
                          aria-hidden
                          className="h-px w-5 self-center bg-steel-200 transition duration-300 group-hover:w-8 group-hover:bg-accent-400 dark:bg-ink-600"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-16 flex flex-col items-start justify-between gap-5 border border-ink-900 bg-ink-950 p-7 text-white sm:flex-row sm:items-center dark:border-accent-400/40">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-300">
                    Siguiente paso
                  </span>
                  <p className="mt-2 font-display text-lg font-semibold">
                    ¿Quieres conocer más sobre {service.name}?
                  </p>
                </div>
                <Link
                  to="/#contacto"
                  className="inline-flex items-center gap-2 border border-accent-400 bg-accent-500 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-950 transition hover:bg-accent-400"
                >
                  Hablar con nosotros
                  <span aria-hidden className="font-mono text-accent-900">/</span>
                </Link>
              </div>

              <nav className="mt-14">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel-500 dark:text-steel-300">
                  Otros módulos
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-px bg-steel-200 sm:grid-cols-3 dark:bg-ink-700">
                  {services
                    .filter((s) => s.id !== service.id)
                    .map((s, k) => (
                      <li key={s.id}>
                        <Link
                          to={`/servicios/${s.id}`}
                          className="group flex h-full flex-col justify-between gap-4 bg-white p-5 transition duration-300 hover:bg-steel-50 dark:bg-ink-950 dark:hover:bg-ink-900"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-500 tabular-nums dark:text-steel-300">
                            0{k + 1}
                          </span>
                          <span className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                            {s.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

// Íconos de línea personalizados — strokes 1.5px, geometría consistente.
// Nada de emojis que leen como "generado".
function IconAutomation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" d="M4 7h10m-10 5h16m-16 5h7" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
      <path strokeLinecap="round" d="M20 7h.01M4 17h.01" />
    </svg>
  )
}

function IconAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="8" width="14" height="10" rx="1" />
      <path strokeLinecap="round" d="M12 8V4M9 4h6M8 12h.01M12 12h.01M16 12h.01M8 15h8" />
    </svg>
  )
}

function IconSecurity() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <path strokeLinecap="round" d="M9 12l2 2 4-4" />
    </svg>
  )
}

function IconDashboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" d="M4 20V10m5 10V4m5 16v-7m5 7v-12" />
      <path strokeLinecap="round" d="M3 20h18" />
    </svg>
  )
}

const benefits = [
  {
    code: 'A.01',
    icon: IconAutomation,
    title: 'Automatización total',
    desc: 'Nómina, IMSS, CFDI y tesorería en un flujo continuo. Cero intervención manual.',
    metric: '24 / 7',
  },
  {
    code: 'A.02',
    icon: IconAI,
    title: 'RIGA, el robot',
    desc: 'Clasifica expedientes digitales automáticamente, con lectura asistida por IA.',
    metric: '1,200 docs / hora',
  },
  {
    code: 'A.03',
    icon: IconSecurity,
    title: 'Seguridad y cumplimiento',
    desc: 'Almacenamiento cifrado, actualización legal permanente, respaldos redundantes.',
    metric: '100% NOM',
  },
  {
    code: 'A.04',
    icon: IconDashboard,
    title: 'Visibilidad en tiempo real',
    desc: 'Tableros, semáforos de obligaciones fiscales y alertas instantáneas.',
    metric: 'live',
  },
]

export default function Platforms() {
  return (
    <section
      id="beneficios"
      className="relative bg-white py-20 dark:bg-ink-950 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              chapter="03"
              eyebrow="Plataformas integradas"
              title="Tecnología, procesos y talento humano, operando como uno."
              align="left"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-steel-600 dark:text-steel-300">
              Nuestras plataformas se conectan entre sí para automatizar la
              gestión de talento, nómina, cumplimiento y tesorería. Infraestructura
              operando 24/7 desde cualquier dispositivo, sin dependencias ocultas.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-steel-200 pt-6 dark:border-ink-700">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                  uptime
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-brand-700 dark:text-accent-300 tabular-nums">
                  99.9%
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                  integraciones
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-brand-700 dark:text-accent-300 tabular-nums">
                  12+
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                  actualización
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-brand-700 dark:text-accent-300">
                  continua
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-steel-200 sm:grid-cols-2 dark:bg-ink-700">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <li
                    key={b.title}
                    className="group relative flex flex-col gap-5 bg-white p-6 transition duration-300 hover:bg-steel-50 dark:bg-ink-900 dark:hover:bg-ink-800 sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-steel-300 text-brand-700 transition duration-300 group-hover:border-accent-500 group-hover:text-accent-600 dark:border-ink-700 dark:text-accent-300 dark:group-hover:border-accent-400">
                        <span className="h-5 w-5">
                          <Icon />
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                        {b.code}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                        {b.title}
                      </h3>
                      <p className="mt-2 max-w-[32ch] text-[13px] leading-relaxed text-steel-600 dark:text-steel-300">
                        {b.desc}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-2 font-mono text-[11px] text-accent-700 dark:text-accent-300">
                      <span
                        aria-hidden
                        className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse-dot"
                      />
                      <span className="tabular-nums">{b.metric}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

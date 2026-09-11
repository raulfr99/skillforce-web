import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const benefits = [
  { icon: '⚡', title: 'Automatización total', desc: 'Nómina, IMSS, CFDI y tesorería en un solo flujo sin intervención manual.' },
  { icon: '🤖', title: 'Inteligencia Artificial', desc: 'Robot RIGA recopila, identifica y clasifica documentos automáticamente.' },
  { icon: '🔒', title: 'Seguridad y cumplimiento', desc: 'Actualizaciones legales permanentes y almacenamiento cifrado 24/7.' },
  { icon: '📊', title: 'Visibilidad en tiempo real', desc: 'Tableros de control, semáforos de obligaciones y alertas instantáneas.' },
]

export default function Platforms() {
  return (
    <section id="beneficios" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <Reveal direction="left">
              <SectionHeading eyebrow="Beneficios" title="Plataformas integradas" align="left" />
            </Reveal>
            <Reveal direction="left" delay={100}>
              <p className="mt-5 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                Tecnología, procesos y talento humano trabajando como uno.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Nuestras plataformas se conectan entre sí para automatizar la gestión de talento, nómina,
                cumplimiento y tesorería, con inteligencia artificial y acceso 24/7 desde cualquier dispositivo.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition duration-300 hover:border-brand-200 hover:bg-brand-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700 dark:hover:bg-brand-950/40">
                    <span className="text-2xl">{b.icon}</span>
                    <h3 className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">{b.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right column — video placeholder */}
          <Reveal direction="right">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/20 ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="aspect-video w-full">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                  alt="Video institucional SkillForce"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-950/50 to-brand-900/30 transition duration-300 group-hover:from-brand-950/40 group-hover:to-brand-900/20">
                <button
                  type="button"
                  aria-label="Reproducir video"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/30 backdrop-blur-sm transition duration-300 hover:scale-110 hover:bg-white/30 hover:ring-white/50"
                >
                  <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              {/* Corner badge */}
              <div className="absolute bottom-4 left-4 rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Video institucional
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

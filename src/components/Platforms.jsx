import SectionHeading from './SectionHeading.jsx'

export default function Platforms() {
  return (
    <section id="beneficios" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <SectionHeading
            eyebrow="Beneficios"
            title="Plataformas"
            align="left"
          />
          <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
            Integramos tecnología, procesos y talento humano
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Nuestras plataformas trabajan juntas para automatizar la gestión de
            talento, nómina, cumplimiento y tesorería de tu empresa, con
            inteligencia artificial y acceso 24/7 desde cualquier dispositivo.
          </p>
        </div>

        <div className="md:col-span-3">
          {/* Reemplazar por el video institucional (iframe de YouTube o <video>) */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/20 ring-1 ring-slate-200 dark:ring-slate-800">
            <div className="aspect-video w-full">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Video SkillForce"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-brand-950/40 transition group-hover:bg-brand-950/30">
              <button
                type="button"
                aria-label="Reproducir video"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition group-hover:scale-110"
              >
                <svg className="ml-1 h-9 w-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

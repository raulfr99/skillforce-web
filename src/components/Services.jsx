import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 dark:bg-slate-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Nuestros servicios"
            subtitle="Plataformas que cubren todo el ciclo del capital humano y la administración de tu empresa."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <Link
                to={`/servicios/${service.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl shadow-lg shadow-brand-900/10 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20 hover:ring-brand-300/50 dark:ring-slate-700 dark:shadow-black/40 dark:hover:ring-brand-500/40"
              >
                <div className="aspect-[3/4] w-full">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950 via-brand-900/85 to-transparent p-5 pt-20">
                  <h3 className="text-base font-semibold leading-snug text-white">{service.name}</h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 opacity-0 transition duration-300 group-hover:opacity-100">
                    {service.short}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-300 transition duration-300 group-hover:gap-2.5">
                    Ver más
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
                {/* Top gradient badge */}
                <div className="absolute left-4 top-4 rounded-full bg-brand-600/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm opacity-0 transition duration-300 group-hover:opacity-100">
                  {service.name.split(' ')[0]}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

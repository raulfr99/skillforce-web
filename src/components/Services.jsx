import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function FeatureCard({ service }) {
  return (
    <Link
      to={`/servicios/${service.id}`}
      className="group relative flex flex-col overflow-hidden bg-ink-900 text-white md:col-span-2 md:row-span-3"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/55 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 grid-dots opacity-[0.1]"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:p-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">
          01 / Servicio principal
        </span>
        <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl md:text-[2rem]">
          {service.name}
        </h3>
        <p className="live-bar max-w-md text-sm text-white/75">
          {service.short}
        </p>
        <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-300 transition group-hover:gap-3">
          Explorar módulo
          <span aria-hidden>/</span>
        </span>
      </div>
    </Link>
  )
}

function CompactCard({ service, index }) {
  return (
    <Link
      to={`/servicios/${service.id}`}
      className="group relative flex flex-col justify-between overflow-hidden border border-steel-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-[0_20px_60px_-20px_rgba(10,27,56,0.25)] dark:border-ink-700 dark:bg-ink-900 dark:hover:border-accent-500/70"
    >
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-accent-500 transition duration-500 group-hover:scale-y-100"
      />

      <div className="flex items-start justify-between gap-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
          0{index + 2}
        </span>
        <span className="h-16 w-16 overflow-hidden rounded-full ring-1 ring-steel-200 dark:ring-ink-700">
          <img
            src={service.image}
            alt=""
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110"
            loading="lazy"
          />
        </span>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-xl font-semibold leading-tight text-ink-900 transition group-hover:text-brand-700 dark:text-white dark:group-hover:text-accent-200">
          {service.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel-600 dark:text-steel-300">
          {service.short}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-steel-200 pt-4 dark:border-ink-700">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-steel-500 dark:text-steel-300">
          Ver detalle
        </span>
        <svg
          className="h-4 w-4 text-ink-900 transition duration-300 group-hover:translate-x-1 group-hover:text-accent-500 dark:text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )
}

export default function Services() {
  const [featured, ...rest] = services

  return (
    <section
      id="servicios"
      className="relative bg-steel-50 py-20 dark:bg-ink-950 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            chapter="01"
            eyebrow="Módulos operativos"
            title="Qué hace SkillForce"
            subtitle="Cuatro plataformas conectadas que cubren el ciclo completo: atraer talento, procesar la nómina, cumplir con la autoridad y controlar la cobranza."
            align="left"
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          <FeatureCard service={featured} />
          {rest.map((service, i) => (
            <div key={service.id} className="md:col-span-2 md:row-span-1">
              <CompactCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

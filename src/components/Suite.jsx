import { Link } from 'react-router-dom'
import { suite } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  )
}

function SolidTile({ item }) {
  return (
    <Link
      to={item.to}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-700 p-7 text-white transition duration-500 hover:bg-brand-600 sm:p-8"
    >
      {/* Decorative half-ring: suggests "rotación / módulo" sin ser decoración vacía */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10 transition duration-700 group-hover:scale-110"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/5 transition duration-700 group-hover:scale-110"
      />

      <div className="relative">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
          Módulo
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
          {item.name}
        </h3>
      </div>

      <div className="relative mt-6 flex items-end justify-between gap-6">
        <p className="max-w-[22ch] text-sm text-white/70">{item.tagline}</p>
        <ArrowIcon className="h-10 w-10 shrink-0 rounded-full border border-white/20 p-2 text-white transition duration-300 group-hover:border-white/60 group-hover:bg-white/10" />
      </div>
    </Link>
  )
}

function ImageTile({ item }) {
  return (
    <Link
      to={item.to}
      className="group relative overflow-hidden rounded-3xl bg-ink-900"
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full min-h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
            {item.name}
          </h3>
          {item.tagline && (
            <p className="mt-1 text-xs text-white/60 sm:text-sm">{item.tagline}</p>
          )}
        </div>
        <ArrowIcon className="h-9 w-9 shrink-0 rounded-full border border-white/30 p-2 text-white transition duration-300 group-hover:border-white group-hover:bg-white/15" />
      </div>
    </Link>
  )
}

export default function Suite() {
  return (
    <section id="suit" className="bg-sand-50 py-20 dark:bg-ink-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ecosistema"
            title="Suite SkillForce"
            subtitle="Siete módulos conectados que resuelven el ciclo completo: desde atraer talento hasta timbrar la nómina y comprobar un viático."
          />
        </Reveal>

        {/* Un solo momento de animación: todo el bento entra como una pieza */}
        <Reveal delay={120}>
          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {suite.map((item) => (
              <div key={item.name} className={item.span}>
                {item.variant === 'solid' ? (
                  <SolidTile item={item} />
                ) : (
                  <ImageTile item={item} />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

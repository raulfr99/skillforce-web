import { Link } from 'react-router-dom'
import { suite } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function ArrowGlyph({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

function SolidTile({ item, index }) {
  return (
    <Link
      to={item.to}
      className="group relative flex h-full flex-col justify-between overflow-hidden bg-brand-800 p-6 text-white transition duration-500 hover:bg-brand-700 sm:p-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-dots opacity-20 transition duration-500 group-hover:opacity-30"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent-400 transition duration-500 group-hover:scale-y-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-200">
          {String(index + 1).padStart(2, '0')} · módulo
        </span>
        <span
          aria-hidden
          className="inline-flex h-2 w-2 rounded-full bg-accent-400/70 animate-pulse-dot"
        />
      </div>

      <div className="relative">
        <h3 className="font-display text-2xl font-semibold leading-tight sm:text-[1.65rem]">
          {item.name}
        </h3>
        <div className="mt-5 flex items-end justify-between gap-4">
          <p className="max-w-[24ch] text-[13px] text-white/70">
            {item.tagline}
          </p>
          <ArrowGlyph className="h-5 w-5 shrink-0 text-accent-300 transition duration-300 group-hover:translate-x-1 group-hover:text-accent-200" />
        </div>
      </div>
    </Link>
  )
}

function ImageTile({ item, index }) {
  return (
    <Link
      to={item.to}
      className="group relative block h-full overflow-hidden bg-ink-900"
    >
      <img
        src={item.image}
        alt=""
        className="h-full min-h-[200px] w-full object-cover grayscale-[0.25] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-dots opacity-[0.08]"
      />

      <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-200">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
            {item.name}
          </h3>
          {item.tagline && (
            <p className="mt-1.5 max-w-[26ch] text-xs text-white/65">
              {item.tagline}
            </p>
          )}
        </div>
        <ArrowGlyph className="h-5 w-5 shrink-0 text-white transition duration-300 group-hover:translate-x-1 group-hover:text-accent-300" />
      </div>
    </Link>
  )
}

export default function Suite() {
  return (
    <section
      id="suit"
      className="relative bg-white py-20 dark:bg-ink-900 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            chapter="02"
            eyebrow="Ecosistema"
            title="Suite SkillForce"
            subtitle="Siete módulos conectados que resuelven el ciclo completo: desde atraer talento hasta timbrar la nómina y comprobar un viático."
            align="left"
          />
        </Reveal>

        <Reveal>
          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[230px] md:grid-cols-4">
            {suite.map((item, i) => (
              <div key={item.name} className={item.span}>
                {item.variant === 'solid' ? (
                  <SolidTile item={item} index={i} />
                ) : (
                  <ImageTile item={item} index={i} />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

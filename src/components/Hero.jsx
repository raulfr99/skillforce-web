import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/services.js'
import heroVideo from '../videos/skillforceHero.mp4'

const FULL_VIDEO_EMBED_URL =
  'https://drive.google.com/file/d/1-XIIQznF1zIgOvJIy4JDq8QK97C0MwDj/preview'

// Telemetría: métricas operativas reales de SkillForce.
// Se duplica el arreglo en render para un loop sin costura.
const telemetry = [
  { label: 'nóminas / mes',        value: '25,842',  unit: '' },
  { label: 'empleados en 3 min',   value: '3,000',   unit: '' },
  { label: 'cumplimiento fiscal',  value: '100',     unit: '%' },
  { label: 'CFDI timbrados',       value: 'ilimitado', unit: '' },
  { label: 'años operando',        value: '15',      unit: '' },
  { label: 'sectores activos',     value: '8',       unit: '' },
]

function TelemetryStrip() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink-950/80 backdrop-blur-[2px]">
      <div className="overflow-hidden pause-on-hover">
        <div className="animate-marquee flex w-max items-center gap-10 py-3 font-mono text-[11px] uppercase tracking-wide text-white/70 sm:py-4 sm:text-xs">
          {[...telemetry, ...telemetry, ...telemetry].map((t, i) => (
            <span
              key={`${t.label}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-accent-400 opacity-75 animate-pulse-dot" />
                <span className="relative rounded-full bg-accent-400 h-1.5 w-1.5" />
              </span>
              <span className="text-accent-300 tabular-nums">
                {t.value}
                {t.unit}
              </span>
              <span className="text-white/45">{t.label}</span>
              <span className="text-white/15">//</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden bg-ink-950"
      >
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Capa de click para abrir modal con sonido */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Reproducir video con sonido"
          title="Reproducir con sonido"
          className="absolute inset-0 z-10 cursor-pointer"
        />

        {/* Oscurecido operativo: oscurece la base más de lo que estaba,
            así la tipografía display gana peso sin cristales difusos. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/15"
        />

        {/* Retícula puntuada muy sutil: textura "plano" sobre el video */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 grid-dots opacity-[0.07]"
        />

        {/* Indicador "operando" arriba-izquierda */}
        <div className="pointer-events-none absolute left-4 top-20 z-30 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 sm:left-6 sm:top-24 sm:text-[11px]">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent-400 opacity-60 animate-pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          sistema operando
          <span className="animate-blink text-accent-400">_</span>
        </div>

        {/* Reproducir con sonido — arriba derecha, sutil */}
        <span className="pointer-events-none absolute right-4 top-20 z-30 inline-flex items-center gap-2 border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/80 sm:right-6 sm:top-24 sm:text-[11px]">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          play / sonido
        </span>

        {/* Bloque principal: izquierda alineado, compacto.
            Lo que da identidad es la tipografía display y la "coordenada"
            de capítulo arriba, no un bento centrado genérico. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-20 z-30 px-4 sm:px-6 sm:bottom-24 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 text-left">
            <span className="animate-rise pointer-events-auto font-mono text-[11px] uppercase tracking-[0.2em] text-accent-300">
              <span className="text-white/40">00 / </span>skillforce.mx
            </span>

            <h1
              className="animate-rise pointer-events-auto font-display text-[2rem] font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[5rem]"
              style={{ animationDelay: '120ms' }}
            >
              Nómina, cumplimiento
              <br />
              <span className="text-accent-300">y expediente digital</span>
              <span className="text-white">, operando.</span>
            </h1>

            <p
              className="animate-rise pointer-events-auto max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
              style={{ animationDelay: '220ms' }}
            >
              {company.tagline}
            </p>

            <div
              className="animate-rise pointer-events-auto flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3"
              style={{ animationDelay: '320ms' }}
            >
              <Link
                to="/#servicios"
                className="group inline-flex items-center justify-center gap-2 border border-accent-400 bg-accent-500 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-950 transition hover:bg-accent-400 sm:text-xs"
              >
                Ver servicios
                <span className="font-mono text-accent-900 transition group-hover:translate-x-0.5">
                  /
                </span>
              </Link>
              <Link
                to="/#contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white/5 sm:text-xs"
              >
                Hablar con nosotros
              </Link>
            </div>
          </div>
        </div>

        <TelemetryStrip />
      </section>

      {/* Modal con sonido */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video SkillForce"
          onClick={() => setOpen(false)}
          className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            src={FULL_VIDEO_EMBED_URL}
            title="Video SkillForce"
            allow="autoplay; fullscreen"
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
            className="aspect-video max-h-[90vh] w-full max-w-6xl border border-white/10"
          />
        </div>
      )}
    </>
  )
}

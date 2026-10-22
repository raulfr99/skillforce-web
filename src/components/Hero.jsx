import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/services.js'
import heroVideo from '../videos/skillforceVideo.mp4'

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

        {/* Capa de click: abre modal con audio */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Reproducir video con sonido"
          title="Reproducir con sonido"
          className="absolute inset-0 z-10 cursor-pointer"
        />

        {/* Degradado tipo humo — se desvanece desde la base, muy tenue */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[55%] bg-gradient-to-t from-ink-950/80 via-ink-950/35 to-transparent sm:h-[48%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[28%] bg-gradient-to-t from-ink-950/60 to-transparent"
        />

        {/* Contenido anclado abajo, un poco separado del borde */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
          <div className="pointer-events-auto animate-fade-in-up mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:gap-6">
            <p className="max-w-3xl text-sm leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-base md:text-lg">
              {company.tagline}
            </p>

            <div className="flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <Link
                to="/#servicios"
                className="rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-900/40 transition duration-300 hover:-translate-y-0.5 hover:from-brand-500 hover:to-accent-400 hover:shadow-xl hover:shadow-accent-500/40 sm:px-6 sm:text-sm"
              >
                Nuestros servicios
              </Link>
              <Link
                to="/#contacto"
                className="rounded-full border border-white/60 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 sm:px-6 sm:text-sm"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        {/* Indicador sutil de que el video es clickeable */}
        <span className="pointer-events-none absolute right-4 top-20 z-30 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:right-6">
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Reproducir con sonido
        </span>
      </section>

      {/* Modal de reproducción */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video SkillForce"
          onClick={() => setOpen(false)}
          className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            src={heroVideo}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-6xl rounded-xl shadow-2xl shadow-black/60"
          />
        </div>
      )}
    </>
  )
}

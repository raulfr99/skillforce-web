import { Link } from 'react-router-dom'
import { company } from '../data/services.js'
import logoBlanco from '../assets/skillforce-blanco.png'

const stats = [
  { value: '25,000+', label: 'Nóminas mensuales' },
  { value: '3,000+',  label: 'Empleados en 3 min' },
  { value: '24/7',    label: 'Acceso total' },
  { value: '100%',    label: 'Cumplimiento legal' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col overflow-hidden bg-brand-950">
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/95 to-brand-800/60" />

      {/* Floating orbs */}
      <div className="animate-float-a pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="animate-float-b pointer-events-none absolute -right-16 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="animate-float-c pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-brand-400/10 blur-2xl" />

      {/* Main content */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 pb-10 pt-24 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <img
            src={logoBlanco}
            alt="Logotipo SkillForce"
            className="mx-auto mb-8 h-28 w-auto drop-shadow-2xl sm:h-36"
          />
        </div>

        <h1
          className="animate-fade-in-up text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '120ms' }}
        >
          Skill<span className="font-extralight text-brand-300">Force</span>
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          {company.tagline}
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: '360ms' }}
        >
          <Link
            to="/#servicios"
            className="rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition duration-300 hover:-translate-y-0.5 hover:from-brand-400 hover:to-accent-400 hover:shadow-xl hover:shadow-brand-500/50 sm:text-base"
          >
            Nuestros servicios
          </Link>
          <Link
            to="/#contacto"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 sm:text-base"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="animate-fade-in relative border-t border-white/10 bg-black/20 backdrop-blur-sm"
        style={{ animationDelay: '500ms' }}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center bg-black/20 px-4 py-6 text-center"
            >
              <span className="text-2xl font-bold text-brand-300 sm:text-3xl">{s.value}</span>
              <span className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

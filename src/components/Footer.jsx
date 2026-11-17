import { Link } from 'react-router-dom'
import { services, company } from '../data/services.js'
import logoBlanco from '../assets/skillforce-blanco.png'

const navLinks = [
  { label: 'Inicio',      to: '/#inicio',     code: '00' },
  { label: 'Beneficios',  to: '/#beneficios', code: '03' },
  { label: 'Suite',       to: '/#suit',       code: '02' },
  { label: 'Quiénes somos', to: '/#skillforce', code: '04' },
  { label: 'Clientes',    to: '/#clientes',   code: '05' },
]

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-ink-950 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-dots opacity-[0.05]"
      />

      {/* Barra superior "operando" */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 sm:px-6 lg:px-8">
          <span
            aria-hidden
            className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse-dot"
          />
          <span>sistema operando — 24/7</span>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        {/* Marca + bajada */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <img src={logoBlanco} alt="" className="h-11 w-auto" />
            <span className="font-display text-2xl font-semibold">
              Skill
              <span className="font-light text-accent-300">Force</span>
            </span>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            {company.tagline}
          </p>

          <a
            href="mailto:contacto@skillforce.mx"
            className="mt-7 inline-flex items-center gap-2 border border-accent-400 bg-accent-500 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-950 transition hover:bg-accent-400"
          >
            Escríbenos
            <span aria-hidden className="font-mono text-accent-900">/</span>
          </a>
        </div>

        {/* Navegación */}
        <div className="md:col-span-3">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="group inline-flex items-baseline gap-2 text-sm text-white/70 transition hover:text-white"
                >
                  <span className="font-mono text-[10px] text-white/30 transition group-hover:text-accent-400">
                    {l.code}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios + dirección */}
        <div className="md:col-span-4">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            Servicios
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/servicios/${s.id}`}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-5 text-left sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] text-white/35">
            © {new Date().getFullYear()} SkillForce · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent-500/60" />
            Tecnología · Procesos · Talento
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { services, company } from '../data/services.js'
import logoBlanco from '../assets/skillforce-blanco.png'

const navLinks = [
  { label: 'Inicio',     to: '/#inicio' },
  { label: 'Beneficios', to: '/#beneficios' },
  { label: 'Suite',      to: '/#suit' },
  { label: 'RIGA',       to: '/#riga' },
  { label: 'Clientes',   to: '/#clientes' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-brand-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-brand-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-accent-700/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logoBlanco} alt="" className="h-11 w-auto" />
            <span className="text-2xl font-bold">
              Skill<span className="font-light text-brand-300">Force</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {company.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="mailto:contacto@skillforce.mx"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Escríbenos
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-white/70 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services + Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/servicios/${s.id}`} className="text-sm text-white/70 transition hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-white/40">
            Dirección
          </h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/60">
            {company.address}
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SkillForce. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
            Tecnología, Procesos y Talento
          </div>
        </div>
      </div>
    </footer>
  )
}

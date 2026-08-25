import { Link } from 'react-router-dom'
import { services, company } from '../data/services.js'
import logoBlanco from '../assets/skillforce-blanco.png'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logoBlanco} alt="" className="h-12 w-auto" />
            <span className="text-2xl font-bold">
              Skill<span className="font-light">Force</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Integramos tecnología, procesos y talento humano para ofrecerte un
            servicio transparente, colaborativo y vanguardista.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/servicios/${s.id}`}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Contacto
          </h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/80">
            {company.address}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} SkillForce. Todos los derechos reservados.
      </div>
    </footer>
  )
}

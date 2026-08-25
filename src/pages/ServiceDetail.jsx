import { Link, useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services.js'
import logoBlanco from '../assets/skillforce-blanco.png'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-brand-950">
        <img
          src={service.hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-900/60 to-brand-950/95" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 md:pb-24 md:pt-28 lg:px-8">
          <img
            src={logoBlanco}
            alt="Logotipo SkillForce"
            className="mb-6 h-20 w-auto drop-shadow-lg sm:h-24"
          />
          <nav aria-label="Breadcrumb" className="mb-4 text-xs font-medium text-white/60 sm:text-sm">
            <Link to="/" className="transition hover:text-white">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link to="/#servicios" className="transition hover:text-white">
              Servicios
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{service.name}</span>
          </nav>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {service.name}
          </h1>
          <span className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-justify leading-relaxed text-slate-700 dark:text-slate-300">
            {service.intro}
          </p>

          {service.sections.map((section) => (
            <div key={section.title} className="mt-10">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-2 pl-1">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-brand-50 p-8 text-center dark:bg-brand-950/60 dark:ring-1 dark:ring-brand-800 sm:flex-row sm:justify-between sm:text-left">
            <p className="font-medium text-brand-900 dark:text-brand-100">
              ¿Quieres conocer más sobre {service.name}?
            </p>
            <Link
              to="/#contacto"
              className="rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:from-brand-500 hover:to-accent-500"
            >
              Contáctanos
            </Link>
          </div>

          <nav className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-800">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Otros servicios
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {services
                .filter((s) => s.id !== service.id)
                .map((s) => (
                  <Link
                    key={s.id}
                    to={`/servicios/${s.id}`}
                    className="rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50 dark:border-brand-800 dark:text-brand-300 dark:hover:bg-brand-950"
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}

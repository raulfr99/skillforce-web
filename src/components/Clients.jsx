import { clients } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'

export default function Clients() {
  return (
    <section id="clientes" className="bg-slate-50 py-20 dark:bg-slate-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Confianza"
          title="Nuestros clientes"
          subtitle="Empresas que confían en SkillForce todos los días."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-24 items-center justify-center rounded-xl bg-white px-4 text-center shadow-sm ring-1 ring-slate-200 transition hover:shadow-md dark:bg-slate-800 dark:ring-slate-700"
            >
              {/* Sustituir por el logotipo del cliente */}
              <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

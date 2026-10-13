import { clients } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function ClientCard({ client }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-sand-100 p-5 ring-1 ring-sand-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:ring-brand-300 dark:bg-ink-800 dark:ring-ink-700 dark:hover:bg-ink-700 dark:hover:ring-brand-500/60">
      <div className="flex items-start justify-between">
        <span className="font-serif text-5xl leading-none text-brand-700 dark:text-brand-300 sm:text-6xl">
          {client.abbr}
        </span>
        <span className="h-2 w-2 rounded-full bg-brand-300/70 transition group-hover:bg-accent-500 dark:bg-brand-500/50" />
      </div>
      <div className="mt-10">
        <p className="text-sm font-semibold text-ink-800 dark:text-sand-50">{client.name}</p>
        <p className="mt-0.5 text-[11px] text-ink-500 dark:text-ink-200">{client.sector}</p>
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clientes" className="bg-white py-20 dark:bg-ink-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Confianza"
            title="Quien ya trabaja con nosotros"
            subtitle="Once empresas en cinco sectores confían la nómina y el cumplimiento de su gente a SkillForce."
          />
        </Reveal>

        {/* Un solo momento de animación: el mosaico entero */}
        <Reveal delay={120}>
          <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {/* Feature tile: absorbe lo que antes era la tira de stats de abajo */}
            <div className="col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-700 p-7 text-white sm:p-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-200">
                  Escala
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  11 clientes activos. 5 sectores. Cero migraciones fallidas.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/15 pt-5">
                <div>
                  <p className="text-3xl font-semibold">11</p>
                  <p className="mt-1 text-[11px] text-white/60">Clientes</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">5</p>
                  <p className="mt-1 text-[11px] text-white/60">Sectores</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">100%</p>
                  <p className="mt-1 text-[11px] text-white/60">Cumplimiento</p>
                </div>
              </div>
            </div>

            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

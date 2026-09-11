import { clients } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const gradients = [
  'from-brand-600 to-brand-800',
  'from-accent-600 to-accent-800',
  'from-brand-500 to-accent-600',
  'from-brand-700 to-brand-900',
  'from-accent-500 to-brand-600',
  'from-brand-400 to-brand-700',
  'from-accent-400 to-accent-700',
  'from-brand-600 to-accent-500',
  'from-brand-800 to-brand-950',
  'from-accent-600 to-brand-700',
  'from-brand-500 to-brand-700',
]

const doubled = [...clients, ...clients]

export default function Clients() {
  return (
    <section id="clientes" className="overflow-hidden bg-slate-50 py-20 dark:bg-slate-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Confianza"
            title="Nuestros clientes"
            subtitle="Empresas líderes que confían en SkillForce para gestionar su capital humano."
          />
        </Reveal>
      </div>

      {/* Marquee */}
      <Reveal delay={100}>
        <div className="pause-on-hover relative mt-14 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900" />

          <div className="animate-marquee flex w-max gap-4 px-4">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="group flex w-52 shrink-0 flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-md hover:ring-brand-300/50 dark:bg-slate-800 dark:ring-slate-700 dark:hover:ring-brand-500/40"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} shadow-sm`}>
                  <span className="text-sm font-bold text-white">{client.abbr}</span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">{client.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{client.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Stats row */}
      <Reveal delay={200}>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:divide-slate-700 dark:bg-slate-800 dark:ring-slate-700">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-600 dark:text-brand-400">11+</span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">Clientes activos</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-600 dark:text-brand-400">5+</span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">Sectores</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand-600 dark:text-brand-400">100%</span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">Satisfacción</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

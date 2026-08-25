import { Link } from 'react-router-dom'
import { suite } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'

export default function Suite() {
  return (
    <section id="suit" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ecosistema"
          title="Suit SkillForce"
          subtitle="Un ecosistema de módulos conectados entre sí para gestionar tu empresa de punta a punta."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {suite.map((item, i) => (
            <Link
              key={item.name}
              to={item.to}
              className={`group relative overflow-hidden rounded-xl ${
                i % 3 === 1 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="aspect-[16/10] w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-brand-900/30 transition group-hover:bg-brand-900/10" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-brand-700/95 px-4 py-3">
                <span className="text-xs font-semibold leading-tight text-white sm:text-sm">
                  {item.name}
                </span>
                <svg
                  className="h-4 w-4 shrink-0 text-white/70 transition group-hover:translate-x-1 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

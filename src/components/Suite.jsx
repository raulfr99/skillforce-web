import { Link } from 'react-router-dom'
import { suite } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Suite() {
  return (
    <section id="suit" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ecosistema"
            title="Suite SkillForce"
            subtitle="Un ecosistema de módulos conectados para gestionar tu empresa de punta a punta."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {suite.map((item, i) => (
            <Reveal key={item.name} delay={i * 60} className={i % 3 === 1 ? 'md:col-span-2' : ''}>
              <Link
                to={item.to}
                className="group relative block overflow-hidden rounded-2xl"
              >
                <div className="aspect-[16/10] w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/30 to-transparent transition duration-300 group-hover:via-brand-900/20" />
                {/* Bottom bar */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-r from-brand-800/95 to-brand-700/95 px-4 py-3 backdrop-blur-sm transition duration-300 group-hover:from-brand-700/95 group-hover:to-accent-700/95">
                  <span className="text-xs font-semibold leading-tight text-white sm:text-sm">{item.name}</span>
                  <svg
                    className="h-4 w-4 shrink-0 text-white/70 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

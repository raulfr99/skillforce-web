import { Link } from 'react-router-dom'
import { company } from '../data/services.js'
import logoBlanco from '../assets/skillforce-blanco.png'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-950">
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-900/40" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-36 lg:px-8">
        <img
          src={logoBlanco}
          alt="Logotipo SkillForce"
          className="mb-8 h-32 w-auto drop-shadow-xl sm:h-40"
        />
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Skill<span className="font-light">Force</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
          {company.tagline}
        </p>
        <Link
          to="/#servicios"
          className="mt-10 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:from-brand-400 hover:to-accent-400 sm:text-base"
        >
          Explora más
        </Link>
      </div>
    </section>
  )
}

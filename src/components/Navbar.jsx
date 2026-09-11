import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import logoColor from '../assets/skillforce-color.png'
import logoBlanco from '../assets/skillforce-blanco.png'

const links = [
  { label: 'Inicio',          to: '/#inicio' },
  { label: 'Beneficios',      to: '/#beneficios' },
  { label: 'Suit SkillForce', to: '/#suit' },
  { label: 'Clientes',        to: '/#clientes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/95 shadow-lg shadow-brand-950/5 backdrop-blur-md dark:border-white/5 dark:bg-brand-950/95 dark:shadow-brand-950/50'
          : 'border-b border-transparent bg-white/90 backdrop-blur-sm dark:bg-brand-950/85'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="SkillForce — Inicio">
          <img src={logoColor} alt="" className="h-10 w-auto dark:hidden" />
          <img src={logoBlanco} alt="" className="hidden h-10 w-auto dark:block" />
          <span className="text-xl font-bold tracking-tight text-brand-800 dark:text-white">
            Skill<span className="font-light text-accent-600 dark:text-brand-300">Force</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="relative pb-0.5 text-sm font-medium text-slate-600 transition duration-200 hover:text-brand-700 dark:text-white/80 dark:hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-brand-500 after:to-accent-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contacto"
              className="rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-px hover:from-brand-500 hover:to-accent-500 hover:shadow-md dark:from-white dark:to-white dark:text-brand-700 dark:hover:from-brand-50 dark:hover:to-brand-50"
            >
              Contacto
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Animated mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="space-y-1 border-t border-slate-200/80 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md dark:border-white/10 dark:bg-brand-950/95">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import logoColor from '../assets/skillforce-color.png'
import logoBlanco from '../assets/skillforce-blanco.png'

const links = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Beneficios', to: '/#beneficios' },
  { label: 'Suit SkillForce', to: '/#suit' },
  { label: 'Clientes', to: '/#clientes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur dark:border-transparent dark:bg-gradient-to-r dark:from-brand-950 dark:via-brand-900 dark:to-brand-800 dark:shadow-lg dark:shadow-brand-950/40">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="SkillForce — Inicio">
          {/* Logo de color en modo claro, logo blanco en modo oscuro */}
          <img src={logoColor} alt="" className="h-11 w-auto dark:hidden" />
          <img src={logoBlanco} alt="" className="hidden h-11 w-auto dark:block" />
          <span className="text-2xl font-bold tracking-tight text-brand-800 dark:text-white">
            Skill<span className="font-light text-accent-600 dark:text-white">Force</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-700 dark:text-white/90 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contacto"
              className="rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:from-brand-500 hover:to-accent-500 dark:from-white dark:to-white dark:text-brand-700 dark:hover:from-brand-50 dark:hover:to-brand-50"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 dark:text-white"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-white/10 dark:bg-brand-950 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50 dark:text-white/90 dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

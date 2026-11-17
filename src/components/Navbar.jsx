import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import logoColor from '../assets/skillforce-color.png'
import logoBlanco from '../assets/skillforce-blanco.png'

const links = [
  { label: 'Inicio',     to: '/#inicio',     code: '00' },
  { label: 'Beneficios', to: '/#beneficios', code: '03' },
  { label: 'Suite',      to: '/#suit',       code: '02' },
  { label: 'Clientes',   to: '/#clientes',   code: '05' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-steel-200 bg-white/95 dark:border-white/10 dark:bg-ink-950/95'
          : 'border-b border-transparent bg-white/85 dark:bg-ink-950/90'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="SkillForce — Inicio"
        >
          <img src={logoColor} alt="" className="h-10 w-auto dark:hidden" />
          <img
            src={logoBlanco}
            alt=""
            className="hidden h-10 w-auto dark:block"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
            Skill<span className="font-light text-accent-600 dark:text-accent-300">Force</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="group relative inline-flex items-baseline gap-1.5 py-1 text-sm font-medium text-steel-700 transition duration-200 hover:text-ink-900 dark:text-white/80 dark:hover:text-white"
              >
                <span className="font-mono text-[9px] text-steel-400 transition group-hover:text-accent-500 dark:text-steel-300">
                  {link.code}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 border border-ink-900 bg-ink-900 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-accent-500 hover:border-accent-500 hover:text-ink-950 dark:border-accent-400 dark:bg-accent-500 dark:text-ink-950 dark:hover:bg-accent-400"
            >
              Contacto
              <span aria-hidden className="font-mono text-white/60 dark:text-ink-950/60">/</span>
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
            className="inline-flex h-10 w-10 items-center justify-center text-ink-900 transition hover:bg-steel-100 dark:text-white dark:hover:bg-white/10"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-0 border-t border-steel-200 bg-white px-4 pb-4 pt-2 dark:border-white/10 dark:bg-ink-950">
          {links.map((link) => (
            <li
              key={link.label}
              className="border-b border-steel-100 last:border-b-0 dark:border-white/5"
            >
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-2 py-3 text-sm font-medium text-steel-700 transition hover:text-ink-900 dark:text-white/85 dark:hover:text-white"
              >
                <span className="font-mono text-[10px] text-steel-400 dark:text-steel-300">
                  {link.code}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="block border border-ink-900 bg-ink-900 px-3 py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.15em] text-white dark:border-accent-400 dark:bg-accent-500 dark:text-ink-950"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { clients } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function LogoCell({ client, code }) {
  const isDarkTheme = client.theme === 'dark'

  // Cell container: cambia background según el tema del logo.
  const cellBg = isDarkTheme
    ? 'bg-ink-900 hover:bg-ink-800 dark:bg-ink-900 dark:hover:bg-ink-800'
    : 'bg-white hover:bg-steel-50 dark:bg-ink-900 dark:hover:bg-ink-800'

  // Logo plate (contenedor interior donde vive la imagen): asegura contraste
  // tanto en modo claro como oscuro. Logos oscuros → plate claro; logos
  // blancos → plate oscuro siempre.
  const logoPlate = isDarkTheme
    ? 'bg-ink-900'
    : 'bg-white dark:bg-steel-50'

  // Colores de texto / meta adaptados al fondo
  const codeColor = isDarkTheme
    ? 'text-steel-300'
    : 'text-steel-500 dark:text-steel-300'
  const nameColor = isDarkTheme
    ? 'text-white group-hover:text-accent-200'
    : 'text-ink-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-accent-200'
  const sectorColor = isDarkTheme
    ? 'text-steel-300'
    : 'text-steel-500 dark:text-steel-300'
  const divider = isDarkTheme
    ? 'border-white/10'
    : 'border-steel-200 dark:border-ink-700'

  return (
    <figure
      className={`group relative flex h-full flex-col justify-between p-5 transition duration-300 ${cellBg} sm:p-6`}
    >
      {/* Retícula puntuada: sutil en claro, con más opacidad en oscuro */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          isDarkTheme ? 'grid-dots opacity-[0.12]' : 'grid-dots-dark opacity-70 dark:grid-dots dark:opacity-30'
        }`}
      />

      {/* Barra cian firma */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-5 left-0 w-[2px] origin-top scale-y-0 bg-accent-500 transition duration-500 group-hover:scale-y-100"
      />

      {/* Cabecera */}
      <div className="relative flex items-start justify-between">
        <span className={`font-mono text-[10px] uppercase tracking-[0.2em] tabular-nums ${codeColor}`}>
          C.{code}
        </span>
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-accent-400 opacity-60 animate-pulse-dot" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
        </span>
      </div>

      {/* Placa del logo — contraste garantizado */}
      <div className={`relative my-6 flex flex-1 items-center justify-center rounded-sm ${logoPlate}`}>
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          className="max-h-16 w-auto max-w-[80%] object-contain opacity-90 transition duration-500 group-hover:opacity-100 sm:max-h-20"
        />
      </div>

      {/* Nombre + sector */}
      <figcaption className={`relative border-t pt-3 ${divider}`}>
        <p className={`font-display text-sm font-semibold leading-tight transition ${nameColor}`}>
          {client.name}
        </p>
        <p className={`mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${sectorColor}`}>
          {client.sector}
        </p>
      </figcaption>
    </figure>
  )
}

function InviteCell() {
  return (
    <Link
      to="/#contacto"
      className="group relative flex h-full flex-col justify-between overflow-hidden bg-ink-950 p-5 text-white transition duration-300 hover:bg-ink-900 sm:p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-dots opacity-[0.12]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-5 left-0 w-[2px] origin-top scale-y-0 bg-accent-500 transition duration-500 group-hover:scale-y-100"
      />

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-300">
          C._ _
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          disponible
        </span>
      </div>

      <div className="relative my-6 flex flex-1 items-center justify-center text-center">
        <span className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
          ¿Tu empresa aquí?
        </span>
      </div>

      <div className="relative flex items-center justify-between border-t border-white/10 pt-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent-300">
          Hablemos
        </span>
        <svg
          className="h-4 w-4 text-white transition duration-300 group-hover:translate-x-1 group-hover:text-accent-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )
}

export default function Clients() {
  const count = clients.length
  const sectorCount = new Set(clients.map((c) => c.sector)).size

  return (
    <section
      id="clientes"
      className="relative bg-steel-50 py-20 dark:bg-ink-950 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              chapter="05"
              eyebrow="Confianza operativa"
              title="Quien ya opera con nosotros"
              subtitle={`${count} empresas de ${sectorCount} sectores corren su nómina, cumplimiento y expediente digital sobre nuestra infraestructura.`}
              align="left"
            />
          </Reveal>

          <Reveal className="lg:col-span-5">
            <dl className="grid grid-cols-3 gap-4 border-t border-steel-200 pt-6 text-left dark:border-ink-700">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                  Clientes
                </dt>
                <dd className="mt-2 font-display text-4xl font-semibold text-brand-700 dark:text-accent-300 tabular-nums">
                  {count}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                  Sectores
                </dt>
                <dd className="mt-2 font-display text-4xl font-semibold text-brand-700 dark:text-accent-300 tabular-nums">
                  {sectorCount}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-500 dark:text-steel-300">
                  Migraciones fallidas
                </dt>
                <dd className="mt-2 font-display text-4xl font-semibold text-brand-700 dark:text-accent-300 tabular-nums">
                  0
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-steel-200 bg-steel-200 sm:grid-cols-2 md:grid-cols-4 dark:border-ink-700 dark:bg-ink-700">
            {clients.map((client, i) => (
              <li key={client.name} className="aspect-[4/5]">
                <LogoCell
                  client={client}
                  code={String(i + 1).padStart(2, '0')}
                />
              </li>
            ))}
            <li className="aspect-[4/5]">
              <InviteCell />
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

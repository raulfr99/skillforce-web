const alignments = {
  center: 'text-center items-center',
  left: 'text-left items-start',
  right: 'text-right items-end md:items-end',
}

// Numeración de capítulo opcional (02 / 03) — pero sólo si el llamador la pasa.
// No la colgamos por defecto: eso sería caer en el 01/02/03 genérico.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  chapter,
  invert = false,
}) {
  const tone = invert ? 'text-white' : 'text-ink-900 dark:text-white'
  const subTone = invert
    ? 'text-white/60'
    : 'text-steel-600 dark:text-steel-300'
  const metaTone = invert
    ? 'text-accent-300'
    : 'text-accent-700 dark:text-accent-300'

  return (
    <div className={`flex flex-col gap-4 ${alignments[align]}`}>
      {(eyebrow || chapter) && (
        <div
          className={`flex items-center gap-3 font-mono text-[11px] ${metaTone}`}
        >
          {chapter && (
            <span className="tabular-nums tracking-tight">{chapter}</span>
          )}
          {chapter && eyebrow && (
            <span className="h-px w-8 bg-accent-500/50" aria-hidden />
          )}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}

      <h2
        className={`font-display text-4xl font-semibold leading-[1.05] ${tone} sm:text-5xl md:text-[3.25rem]`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`live-bar mt-1 max-w-2xl text-[15px] leading-relaxed ${subTone}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

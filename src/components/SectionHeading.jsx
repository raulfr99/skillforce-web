const alignments = {
  center: 'text-center items-center',
  left: 'text-left items-start',
  right: 'text-right items-end md:items-end',
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`flex flex-col ${alignments[align]}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold text-brand-700 dark:text-brand-300 sm:text-4xl">
        {title}
      </h2>
      <span className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      {subtitle && (
        <p className="mt-5 max-w-2xl text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

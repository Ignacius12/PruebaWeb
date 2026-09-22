interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  /** Mobile stays left; desktop centers unless forced left. */
  align?: 'left' | 'center'
  id?: string
  as?: 'h2' | 'h3'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  id,
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const alignClass =
    align === 'left'
      ? 'text-left'
      : 'text-left lg:mx-auto lg:max-w-4xl lg:text-center'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="eyebrow mb-3 lg:mb-4 lg:text-sm lg:tracking-[0.18em]">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className="display text-[2rem] text-ink md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]"
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-4 text-base text-muted md:text-lg lg:mt-5 lg:max-w-2xl lg:text-xl ${
            align === 'center' ? 'lg:mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  id?: string
  as?: 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl lg:max-w-4xl ${alignClass}`}>
      {eyebrow ? (
        <p className="eyebrow mb-3 lg:mb-4 lg:text-sm lg:tracking-[0.18em]">{eyebrow}</p>
      ) : null}
      <Tag
        id={id}
        className="display text-[2rem] text-ink md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]"
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base text-muted md:text-lg lg:mt-5 lg:max-w-2xl lg:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  )
}

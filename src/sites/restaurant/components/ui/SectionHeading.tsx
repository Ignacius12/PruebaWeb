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
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Tag id={id} className="display text-[2rem] text-ink md:text-[2.75rem]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

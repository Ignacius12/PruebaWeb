import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-55 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3'

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-clinic text-white hover:bg-clinic-deep focus-visible:outline-clinic',
  secondary:
    'bg-transparent text-clinic-ink border border-clinic-ink/20 hover:border-clinic hover:text-clinic focus-visible:outline-clinic',
  ghost: 'bg-transparent text-clinic-ink hover:text-clinic focus-visible:outline-clinic',
  'outline-light':
    'bg-transparent text-white border border-white/70 hover:bg-white/10 focus-visible:outline-white',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

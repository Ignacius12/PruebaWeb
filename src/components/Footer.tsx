import { restaurant } from '../config/restaurant'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  const { address, hours, name, phone, shortName, social, footerLinks, legalLinks } =
    restaurant
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`
  const openDays = hours.filter((h) => h.hours !== 'Cerrado')

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-4">
          <p className="display text-2xl tracking-[0.08em]">{shortName}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {restaurant.description}
          </p>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            aria-label="Instagram de Casa Oliva (se abre en una pestaña nueva)"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
            Explorar
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-sm text-white/75 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
            Información
          </p>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/75">
            <p>
              <span className="text-white">{name}</span>
              <br />
              {fullAddress}
            </p>
            <p>
              <a href={`tel:${phone.tel}`} className="hover:text-white">
                {phone.display}
              </a>
            </p>
            <ul className="space-y-1">
              {openDays.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.hours}
                </li>
              ))}
              <li>Lunes: Cerrado</li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {name}. Demo comercial.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white/80">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

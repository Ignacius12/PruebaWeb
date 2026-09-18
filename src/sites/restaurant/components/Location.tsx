import { MapPin, Navigation } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import { Button } from './ui/Button'
import { SectionHeading } from './ui/SectionHeading'

export function Location() {
  const { address, hours, name, phone } = restaurant
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <section
      id="contacto"
      aria-labelledby="location-heading"
      className="section-pad bg-cream"
    >
      <div className="container-page grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="Ubicación"
            title={name}
            id="location-heading"
          />
          <p className="mt-4 flex items-start gap-2 text-ink-soft">
            <MapPin
              size={18}
              className="mt-1 shrink-0 text-olive"
              aria-hidden="true"
            />
            <span>{fullAddress}</span>
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-3 inline-flex min-h-11 items-center text-olive hover:text-olive-deep"
          >
            {phone.display}
          </a>

          <div className="mt-8">
            <Button
              href={address.mapsUrl}
              variant="secondary"
              className="gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} aria-hidden="true" />
              Cómo llegar
            </Button>
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-olive">
            Horario
          </h3>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {hours.map((row) => (
              <div
                key={row.days}
                className="flex items-baseline justify-between gap-4 py-3.5"
              >
                <dt className="text-ink-soft">{row.days}</dt>
                <dd className="text-right font-medium tabular-nums text-ink">
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

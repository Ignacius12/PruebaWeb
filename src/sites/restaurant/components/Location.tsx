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
      <div className="container-page">
        <SectionHeading
          eyebrow="Ubicación"
          title={name}
          id="location-heading"
        />

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-20">
          <div className="md:col-span-5">
            <p className="flex items-start gap-2 text-ink-soft lg:text-lg">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-olive"
                aria-hidden="true"
              />
              <span>{fullAddress}</span>
            </p>
            <a
              href={`tel:${phone.tel}`}
              className="mt-3 inline-flex min-h-11 items-center text-olive hover:text-olive-deep lg:text-lg"
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
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-olive lg:text-base">
              Horario
            </h3>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-4 py-3.5 lg:py-4"
                >
                  <dt className="text-ink-soft lg:text-lg">{row.days}</dt>
                  <dd className="text-right font-medium tabular-nums text-ink lg:text-lg">
                    {row.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

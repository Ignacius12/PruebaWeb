import { MapPin, Navigation } from 'lucide-react'
import { bakery } from '../config'
import { Button } from './Button'

export function BakeryLocation() {
  const { address, hours, name, phone } = bakery
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <section id="contacto" aria-labelledby="bakery-location-heading" className="bakery-section bg-bakery-paper">
      <div className="bakery-container grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <p className="bakery-eyebrow">Dónde estamos</p>
          <h2
            id="bakery-location-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem]"
          >
            {name}
          </h2>
          <p className="mt-4 flex items-start gap-2 text-bakery-ink-soft">
            <MapPin size={18} className="mt-1 shrink-0 text-bakery" aria-hidden />
            <span>{fullAddress}</span>
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-3 inline-flex min-h-11 items-center text-bakery hover:text-bakery-deep"
          >
            {phone.display}
          </a>
          <div className="mt-8">
            <Button
              href={address.mapsUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Navigation size={16} aria-hidden />
              Cómo llegar
            </Button>
          </div>
        </div>

        <div className="md:col-span-7">
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-bakery">
            Horario
          </h3>
          <dl className="mt-5 divide-y divide-bakery-line border-y border-bakery-line">
            {hours.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-bakery-ink-soft">{row.days}</dt>
                <dd className="text-right font-medium tabular-nums text-bakery-ink">
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-bakery-muted">
            El pan caliente suele salir a primera hora. Si llegas tarde, pregunta qué queda de la
            hornada.
          </p>
        </div>
      </div>
    </section>
  )
}

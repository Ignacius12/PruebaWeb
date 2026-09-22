import { MapPin, Navigation } from 'lucide-react'
import { pub } from '../config'
import { Button } from './Button'

export function PubLocation() {
  const { address, hours, name, phone } = pub
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <section id="contacto" aria-labelledby="pub-location-heading" className="pub-section bg-pub-bg">
      <div className="pub-container grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <p className="pub-eyebrow">Dónde</p>
          <h2
            id="pub-location-heading"
            className="mt-3 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem]"
          >
            {name}
          </h2>
          <p className="mt-4 flex items-start gap-2 text-pub-muted">
            <MapPin size={18} className="mt-1 shrink-0 text-pub" aria-hidden />
            <span>{fullAddress}</span>
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-3 inline-flex min-h-11 items-center font-medium text-pub hover:text-pub-deep"
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
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-pub">Horario</h3>
          <dl className="mt-5 divide-y divide-pub-line border-y border-pub-line">
            {hours.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-pub-muted">{row.days}</dt>
                <dd className="text-right font-semibold tabular-nums text-pub-cream">
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

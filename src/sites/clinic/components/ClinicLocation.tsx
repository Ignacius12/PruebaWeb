import { MapPin, Navigation } from 'lucide-react'
import { clinic } from '../config'
import { Button } from './Button'

export function ClinicLocation() {
  const { address, hours, name, phone } = clinic
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <section id="contacto" aria-labelledby="location-heading" className="clinic-section bg-clinic-ice">
      <div className="clinic-container grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <p className="clinic-eyebrow">Ubicación</p>
          <h2 id="location-heading" className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem]">
            {name}
          </h2>
          <p className="mt-4 flex items-start gap-2 text-clinic-ink-soft">
            <MapPin size={18} className="mt-1 shrink-0 text-clinic" aria-hidden />
            <span>{fullAddress}</span>
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-3 inline-flex min-h-11 items-center text-clinic hover:text-clinic-deep"
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
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-clinic">Horario</h3>
          <dl className="mt-5 divide-y divide-clinic-line border-y border-clinic-line">
            {hours.map((row) => (
              <div key={row.days} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-clinic-ink-soft">{row.days}</dt>
                <dd className="text-right font-medium tabular-nums text-clinic-ink">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

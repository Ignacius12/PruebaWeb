import { Phone } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import { Button } from './ui/Button'
import { SectionHeading } from './ui/SectionHeading'

export function Reservations() {
  const { phone } = restaurant

  return (
    <section
      id="reservas"
      aria-labelledby="reservas-heading"
      className="section-pad bg-cream-deep/50"
    >
      <div className="container-page max-w-2xl lg:max-w-3xl">
        <SectionHeading
          eyebrow="Reservas"
          title="Reserva tu mesa"
          description="Llama y te confirmamos disponibilidad al momento. Atención de martes a domingo en horario de servicio."
          id="reservas-heading"
        />

        <div className="mt-8 border-t border-line pt-8 lg:mt-10 lg:pt-10">
          <p className="text-sm font-medium text-ink lg:text-base">¿Quieres reservar?</p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-3 inline-flex min-h-12 items-center text-3xl text-olive transition-colors hover:text-olive-deep md:text-4xl lg:mt-4 lg:text-5xl"
          >
            {phone.display}
          </a>
          <div className="mt-6 lg:mt-8">
            <Button href={`tel:${phone.tel}`} size="lg" className="gap-2 lg:min-h-14 lg:px-8 lg:text-base">
              <Phone size={18} aria-hidden="true" />
              Llamar para reservar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

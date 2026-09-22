import { Phone } from 'lucide-react'
import { restaurant } from '../config/restaurant'
import { Button } from './ui/Button'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

export function Reservations() {
  const { phone } = restaurant
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="reservas"
      ref={ref}
      aria-labelledby="reservas-heading"
      className="section-pad bg-cream-deep/50"
    >
      <div
        className={`container-page grid items-center gap-10 transition-all duration-700 lg:grid-cols-12 lg:gap-16 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="lg:col-span-6 xl:col-span-5">
          <SectionHeading
            eyebrow="Reservas"
            title="Reserva tu mesa"
            description="Llama y te confirmamos disponibilidad al momento. Atención de martes a domingo en horario de servicio."
            id="reservas-heading"
            align="left"
          />

          <div className="mt-8 border-t border-line pt-8 lg:mt-10 lg:pt-10">
            <p className="text-sm font-medium text-ink lg:text-base">
              ¿Quieres reservar?
            </p>
            <a
              href={`tel:${phone.tel}`}
              className="mt-3 inline-flex min-h-12 items-center text-3xl text-olive transition-colors hover:text-olive-deep md:text-4xl lg:mt-4 lg:text-5xl"
            >
              {phone.display}
            </a>
            <div className="mt-6 lg:mt-8">
              <Button
                href={`tel:${phone.tel}`}
                size="lg"
                className="gap-2 lg:min-h-14 lg:px-8 lg:text-base"
              >
                <Phone size={18} aria-hidden="true" />
                Llamar para reservar
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop"
            alt="Comedor de Casa Oliva con mesas preparadas"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4] lg:min-h-[28rem]"
          />
        </div>
      </div>
    </section>
  )
}

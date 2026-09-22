import { Phone } from 'lucide-react'
import { bakery } from '../config'
import { Button } from './Button'

export function BakeryOrder() {
  return (
    <section id="encargar" aria-labelledby="order-heading" className="bakery-section bg-bakery-flour">
      <div className="bakery-container max-w-2xl text-center lg:max-w-3xl">
        <p className="bakery-eyebrow">Encargos</p>
        <h2 id="order-heading" className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]">
          ¿Quieres encargar?
        </h2>
        <p className="mt-4 text-bakery-muted lg:mt-5 lg:text-lg">
          Llama y te reservamos la hornada o preparamos tu pedido para fiestas y
          domingos. Mejor con un día de antelación.
        </p>
        <a
          href={`tel:${bakery.phone.tel}`}
          className="mt-8 inline-flex min-h-12 items-center text-3xl text-bakery hover:text-bakery-deep md:text-4xl lg:mt-10 lg:text-5xl"
        >
          {bakery.phone.display}
        </a>
        <div className="mt-6 flex justify-center lg:mt-8">
          <Button href={`tel:${bakery.phone.tel}`} size="lg" className="gap-2 lg:min-h-14 lg:px-8 lg:text-base">
            <Phone size={18} aria-hidden />
            Llamar al horno
          </Button>
        </div>
      </div>
    </section>
  )
}

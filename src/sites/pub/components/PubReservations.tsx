import { Phone } from 'lucide-react'
import { pub } from '../config'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function PubReservations() {
  const { ref, visible } = useInView<HTMLElement>()
  const nightImage = pub.gallery[2] ?? pub.gallery[0]

  return (
    <section
      id="reservas"
      ref={ref}
      aria-labelledby="pub-reservas-heading"
      className="pub-section bg-pub-panel"
    >
      <div
        className={`pub-container grid items-center gap-10 transition-all duration-700 lg:grid-cols-12 lg:gap-16 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="border-l-4 border-pub pl-6 lg:col-span-6 lg:pl-8 xl:col-span-5">
          <p className="pub-eyebrow lg:text-sm">Grupos y mesas</p>
          <h2
            id="pub-reservas-heading"
            className="mt-3 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            ¿Venís en grupo?
          </h2>
          <p className="mt-4 text-pub-muted lg:mt-6 lg:max-w-xl lg:text-xl">
            Para mesas de 6 o más, llama y te guardamos sitio. El resto: ven
            cuando quieras; si hay hueco, hay caña.
          </p>
          <a
            href={`tel:${pub.phone.tel}`}
            className="mt-8 inline-flex min-h-12 items-center text-3xl font-bold text-pub hover:text-pub-deep md:text-4xl lg:mt-10 lg:text-5xl"
          >
            {pub.phone.display}
          </a>
          <div className="mt-6 lg:mt-8">
            <Button
              href={`tel:${pub.phone.tel}`}
              size="lg"
              className="gap-2 lg:min-h-14 lg:px-8 lg:text-base"
            >
              <Phone size={18} aria-hidden />
              Llamar al pub
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <img
            src={nightImage.src}
            alt={nightImage.alt}
            width={nightImage.width}
            height={nightImage.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-[5/4] lg:min-h-[28rem]"
          />
        </div>
      </div>
    </section>
  )
}

import { bakery } from '../config'
import { useInView } from '../../../hooks/useInView'

export function BakeryGallery() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      aria-labelledby="gallery-heading"
      className="bakery-section bg-bakery-paper"
    >
      <div
        className={`bakery-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="bakery-eyebrow">Galería</p>
          <h2
            id="gallery-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            El pan, de cerca.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4 lg:gap-5">
          {bakery.gallery.map((image, index) => (
            <div key={image.id} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${
                  index === 0
                    ? 'aspect-[3/4] md:row-span-2 md:aspect-auto md:h-full md:min-h-[28rem]'
                    : index % 2 === 0
                      ? 'aspect-[4/5]'
                      : 'aspect-square'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

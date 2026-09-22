import { galleryImages } from '../data/gallery'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

/** Four portrait frames — same collage rhythm as El Candil. */
const collageImages = galleryImages.slice(0, 4)

export function Gallery() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="galeria"
      ref={ref}
      aria-labelledby="gallery-heading"
      className="section-pad bg-cream"
    >
      <div
        className={`container-page transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading
          eyebrow="Galería"
          title="Así se siente Casa Oliva."
          id="gallery-heading"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:mt-14 lg:gap-5">
          {collageImages.map((image, index) => (
            <div key={image.id} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

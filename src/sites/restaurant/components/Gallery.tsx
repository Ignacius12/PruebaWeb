import { galleryImages } from '../data/gallery'
import { SectionHeading } from './ui/SectionHeading'

const spanClass = {
  normal: 'md:col-span-1 md:row-span-1',
  wide: 'md:col-span-2 md:row-span-1',
  tall: 'md:col-span-1 md:row-span-2',
} as const

export function Gallery() {
  return (
    <section
      id="galeria"
      aria-labelledby="gallery-heading"
      className="section-pad bg-cream"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Galería"
          title="La mesa, el producto, el momento."
          description="Una mirada a nuestra cocina y al ambiente de Casa Oliva."
          id="gallery-heading"
        />

        <div className="mt-10 grid auto-rows-[14rem] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[12rem] md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.id}
              className={`overflow-hidden ${spanClass[image.span ?? 'normal']}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

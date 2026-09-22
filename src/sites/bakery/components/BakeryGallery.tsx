import { bakery } from '../config'

export function BakeryGallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bakery-section bg-bakery-paper">
      <div className="bakery-container">
        <p className="bakery-eyebrow">Galería</p>
        <h2 id="gallery-heading" className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]">
          El pan, de cerca.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {bakery.gallery.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className={`w-full object-cover ${
                index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { pub } from '../config'

export function PubGallery() {
  return (
    <section aria-labelledby="pub-gallery-heading" className="pub-section bg-pub-bg">
      <div className="pub-container">
        <p className="pub-eyebrow lg:text-sm">Ambiente</p>
        <h2
          id="pub-gallery-heading"
          className="mt-3 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
        >
          Así se siente El Candil.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:mt-14 lg:gap-5">
          {pub.gallery.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className={`w-full object-cover ${index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { pub } from '../config'
import { useInView } from '../../../hooks/useInView'

export function PubNights() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="noches"
      ref={ref}
      aria-labelledby="nights-heading"
      className="pub-section bg-pub-wood"
    >
      <div
        className={`pub-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="pub-eyebrow lg:text-sm">Esta semana</p>
          <h2
            id="nights-heading"
            className="mt-3 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            Motivos para venir.
          </h2>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {pub.nights.map((night) => (
            <li
              key={night.id}
              className="border border-pub-line bg-pub-panel p-6 transition-colors hover:border-pub/50 lg:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pub lg:text-sm">
                {night.day}
              </p>
              <h3 className="mt-3 text-xl font-bold text-pub-cream lg:text-2xl">
                {night.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pub-muted lg:text-base">
                {night.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

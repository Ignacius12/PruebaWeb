import { pub } from '../config'

export function PubAtmosphere() {
  const { atmosphere } = pub
  return (
    <section id="ambiente" aria-labelledby="atmosphere-heading" className="pub-section bg-pub-panel">
      <div className="pub-container grid gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <p className="pub-eyebrow">El ambiente</p>
          <h2
            id="atmosphere-heading"
            className="mt-3 font-sans text-[2rem] font-bold leading-tight text-pub-cream md:text-[2.5rem]"
          >
            {atmosphere.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pub-muted md:text-lg">
            {atmosphere.body}
          </p>
        </div>
        <ul className="md:col-span-6 md:pt-10">
          {atmosphere.points.map((point) => (
            <li
              key={point}
              className="border-t border-pub-line py-4 text-lg text-pub-cream first:border-t-0 first:pt-0 md:first:border-t md:first:pt-4"
            >
              <span className="mr-3 text-pub" aria-hidden>
                ◆
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { pub } from '../config'

export function PubNights() {
  return (
    <section id="noches" aria-labelledby="nights-heading" className="pub-section bg-pub-wood">
      <div className="pub-container">
        <p className="pub-eyebrow">Esta semana</p>
        <h2
          id="nights-heading"
          className="mt-3 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem]"
        >
          Motivos para venir.
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {pub.nights.map((night) => (
            <li key={night.id} className="border border-pub-line bg-pub-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pub">
                {night.day}
              </p>
              <h3 className="mt-3 text-xl font-bold text-pub-cream">{night.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pub-muted">{night.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { pub } from '../config'

export function PubMenu() {
  return (
    <section id="carta" aria-labelledby="menu-heading" className="pub-section bg-pub-bg">
      <div className="pub-container">
        <p className="pub-eyebrow lg:text-sm">La barra</p>
        <h2
          id="menu-heading"
          className="mt-3 max-w-xl font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:mt-4 lg:max-w-[16ch] lg:text-[3.5rem] xl:text-[4rem]"
        >
          Cañas, copas y algo para picar.
        </h2>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-pub lg:text-base">
              Para beber
            </h3>
            <ul className="mt-5 divide-y divide-pub-line border-y border-pub-line">
              {pub.drinks.map((item) => (
                <li key={item.id} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4 lg:py-5">
                  <p className="font-semibold text-pub-cream lg:text-lg">{item.name}</p>
                  <p className="font-medium tabular-nums text-pub lg:text-lg">{item.price}</p>
                  <p className="col-span-2 text-sm text-pub-muted lg:text-base">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-pub lg:text-base">
              Para picar
            </h3>
            <ul className="mt-5 divide-y divide-pub-line border-y border-pub-line">
              {pub.bites.map((item) => (
                <li key={item.id} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4 lg:py-5">
                  <p className="font-semibold text-pub-cream lg:text-lg">{item.name}</p>
                  <p className="font-medium tabular-nums text-pub lg:text-lg">{item.price}</p>
                  <p className="col-span-2 text-sm text-pub-muted lg:text-base">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { clinic } from '../config'

export function ClinicTreatments() {
  return (
    <section
      id="tratamientos"
      aria-labelledby="treatments-heading"
      className="clinic-section bg-white"
    >
      <div className="clinic-container">
        <p className="clinic-eyebrow">Cuidados</p>
        <h2
          id="treatments-heading"
          className="display mt-3 max-w-2xl text-[2rem] text-clinic-ink md:text-[2.6rem]"
        >
          Tratamientos claros, sin complicaciones.
        </h2>
        <p className="mt-4 max-w-xl text-clinic-muted">
          Una selección de servicios pensados para prevención, confort y resultados naturales.
        </p>

        <ul className="mt-10 divide-y divide-clinic-line border-y border-clinic-line">
          {clinic.treatments.map((item) => (
            <li
              key={item.id}
              className="grid gap-2 py-5 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-8 md:py-6"
            >
              <h3 className="text-[1.05rem] font-medium text-clinic-ink">{item.name}</h3>
              <p className="text-clinic-ink-soft">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

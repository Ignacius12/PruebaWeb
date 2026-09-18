import { clinic } from '../config'

export function ClinicTrust() {
  return (
    <section aria-label="Información de confianza" className="bg-clinic-mint">
      <div className="clinic-container grid grid-cols-2 gap-6 py-9 md:grid-cols-4 md:gap-6 md:py-11">
        {clinic.trust.map((item) => (
          <div key={item.id} className="border-l border-clinic/20 pl-4 md:border-l-0 md:border-t-0 md:pl-0 md:text-center">
            <p className="font-sans text-2xl font-medium tracking-tight text-clinic md:text-[1.75rem]">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-clinic-ink-soft">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

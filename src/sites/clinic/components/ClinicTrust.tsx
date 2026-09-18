import { clinic } from '../config'

export function ClinicTrust() {
  return (
    <section aria-label="Información de confianza" className="border-b border-clinic-line bg-white">
      <div className="clinic-container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
        {clinic.trust.map((item) => (
          <div key={item.id} className="md:text-center">
            <p className="display text-2xl text-clinic md:text-[1.75rem]">{item.value}</p>
            <p className="mt-1 text-sm text-clinic-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

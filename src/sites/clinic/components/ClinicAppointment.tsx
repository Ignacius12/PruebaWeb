import { Phone } from 'lucide-react'
import { clinic } from '../config'
import { Button } from './Button'

export function ClinicAppointment() {
  return (
    <section id="cita" aria-labelledby="cita-heading" className="clinic-section bg-white">
      <div className="clinic-container max-w-2xl lg:max-w-3xl">
        <p className="clinic-eyebrow">Cita</p>
        <h2 id="cita-heading" className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]">
          Pide tu cita
        </h2>
        <p className="mt-4 text-clinic-muted lg:mt-5 lg:text-lg">
          Llama y te damos disponibilidad. Atención en horario de consulta de lunes a viernes.
        </p>
        <div className="mt-8 border-t border-clinic-line pt-8 lg:mt-10 lg:pt-10">
          <p className="text-sm font-medium text-clinic-ink lg:text-base">Teléfono de citas</p>
          <a
            href={`tel:${clinic.phone.tel}`}
            className="mt-3 inline-flex min-h-12 items-center text-3xl text-clinic hover:text-clinic-deep md:text-4xl lg:mt-4 lg:text-5xl"
          >
            {clinic.phone.display}
          </a>
          <div className="mt-6 lg:mt-8">
            <Button href={`tel:${clinic.phone.tel}`} size="lg" className="gap-2 lg:min-h-14 lg:px-8 lg:text-base">
              <Phone size={18} aria-hidden />
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

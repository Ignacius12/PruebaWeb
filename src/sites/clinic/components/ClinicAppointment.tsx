import { Phone } from 'lucide-react'
import { clinic } from '../config'
import { Button } from './Button'

export function ClinicAppointment() {
  return (
    <section id="cita" aria-labelledby="cita-heading" className="clinic-section bg-white">
      <div className="clinic-container max-w-2xl">
        <p className="clinic-eyebrow">Cita</p>
        <h2 id="cita-heading" className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem]">
          Pide tu cita
        </h2>
        <p className="mt-4 text-clinic-muted">
          Llama y te damos disponibilidad. Atención en horario de consulta de lunes a viernes.
        </p>
        <div className="mt-8 border-t border-clinic-line pt-8">
          <p className="text-sm font-medium text-clinic-ink">Teléfono de citas</p>
          <a
            href={`tel:${clinic.phone.tel}`}
            className="mt-3 inline-flex min-h-12 items-center text-3xl text-clinic hover:text-clinic-deep md:text-4xl"
          >
            {clinic.phone.display}
          </a>
          <div className="mt-6">
            <Button href={`tel:${clinic.phone.tel}`} size="lg" className="gap-2">
              <Phone size={18} aria-hidden />
              Llamar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

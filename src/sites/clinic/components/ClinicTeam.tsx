import { clinic } from '../config'
import { useInView } from '../../../hooks/useInView'

export function ClinicTeam() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="equipo"
      ref={ref}
      aria-labelledby="team-heading"
      className="clinic-section bg-clinic-ice"
    >
      <div
        className={`clinic-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="clinic-eyebrow">Equipo</p>
          <h2
            id="team-heading"
            className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            Profesionales que te acompañan.
          </h2>
          <p className="mt-4 text-clinic-muted lg:mx-auto lg:mt-5 lg:max-w-2xl lg:text-lg">
            Perfiles de ejemplo para esta demo. En un proyecto real se mostrarían
            datos verificados del equipo.
          </p>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {clinic.team.map((member) => (
            <li key={member.id} className="group">
              <div className="overflow-hidden">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  width={600}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 font-sans text-lg font-medium tracking-tight text-clinic-ink lg:mt-5 lg:text-xl">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-clinic-muted lg:text-base">
                {member.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

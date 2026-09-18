import { clinic } from '../config'

export function ClinicTeam() {
  return (
    <section id="equipo" aria-labelledby="team-heading" className="clinic-section bg-clinic-ice">
      <div className="clinic-container">
        <p className="clinic-eyebrow">Equipo</p>
        <h2 id="team-heading" className="display mt-3 text-[2rem] text-clinic-ink md:text-[2.6rem]">
          Profesionales que te acompañan.
        </h2>
        <p className="mt-4 max-w-xl text-clinic-muted">
          Perfiles de ejemplo para esta demo. En un proyecto real se mostrarían datos verificados del equipo.
        </p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.team.map((member) => (
            <li key={member.id}>
              <img
                src={member.image.src}
                alt={member.image.alt}
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <h3 className="mt-4 text-lg font-medium text-clinic-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-clinic-muted">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

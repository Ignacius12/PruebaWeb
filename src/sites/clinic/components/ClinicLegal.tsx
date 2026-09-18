export function ClinicLegal() {
  return (
    <section className="border-t border-clinic-line bg-white" aria-label="Información legal">
      <div className="clinic-container grid gap-10 py-12 text-sm text-clinic-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-medium text-clinic-ink">Aviso legal</h2>
          <p className="mt-3 leading-relaxed">
            Esta web es una demostración comercial ficticia. Clínica Alba y sus datos son de ejemplo.
          </p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-medium text-clinic-ink">Privacidad</h2>
          <p className="mt-3 leading-relaxed">
            En esta demo las citas se gestionan por teléfono. En un proyecto real se informaría del
            tratamiento de datos conforme al RGPD.
          </p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-medium text-clinic-ink">Cookies</h2>
          <p className="mt-3 leading-relaxed">
            Esta demostración no utiliza cookies de analítica ni publicidad.
          </p>
        </article>
      </div>
    </section>
  )
}

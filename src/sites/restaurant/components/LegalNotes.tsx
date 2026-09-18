export function LegalNotes() {
  return (
    <section className="border-t border-line bg-cream-deep/40" aria-label="Información legal">
      <div className="container-page grid gap-10 py-12 text-sm text-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-medium text-ink">Aviso legal</h2>
          <p className="mt-3 leading-relaxed">
            Esta web es una demostración comercial ficticia. Casa Oliva y sus
            datos son de ejemplo y no corresponden a un establecimiento real.
          </p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-medium text-ink">Privacidad</h2>
          <p className="mt-3 leading-relaxed">
            En esta demo las reservas se hacen por teléfono. En un proyecto real
            se informaría del tratamiento de datos conforme al RGPD.
          </p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-medium text-ink">Cookies</h2>
          <p className="mt-3 leading-relaxed">
            Esta demostración no utiliza cookies de analítica ni publicidad.
            Solo se emplean las necesarias para el funcionamiento técnico.
          </p>
        </article>
      </div>
    </section>
  )
}

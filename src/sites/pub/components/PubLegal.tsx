export function PubLegal() {
  return (
    <section className="border-t border-pub-line bg-pub-bg" aria-label="Información legal">
      <div className="pub-container grid gap-10 py-12 text-sm text-pub-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-semibold text-pub-cream">Aviso legal</h2>
          <p className="mt-3 leading-relaxed">
            Esta web es una demostración comercial ficticia. El Candil y sus datos son de ejemplo.
          </p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-semibold text-pub-cream">Privacidad</h2>
          <p className="mt-3 leading-relaxed">
            En esta demo las reservas se gestionan por teléfono. En un proyecto real se informaría
            del tratamiento de datos conforme al RGPD.
          </p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-semibold text-pub-cream">Cookies</h2>
          <p className="mt-3 leading-relaxed">
            Esta demostración no utiliza cookies de analítica ni publicidad.
          </p>
        </article>
      </div>
    </section>
  )
}

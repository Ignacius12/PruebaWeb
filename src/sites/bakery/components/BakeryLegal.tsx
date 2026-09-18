export function BakeryLegal() {
  return (
    <section className="border-t border-bakery-line bg-bakery-flour" aria-label="Información legal">
      <div className="bakery-container grid gap-10 py-12 text-sm text-bakery-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-medium text-bakery-ink">Aviso legal</h2>
          <p className="mt-3 leading-relaxed">
            Esta web es una demostración comercial ficticia. Horno La Espiga y sus datos son de
            ejemplo.
          </p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-medium text-bakery-ink">Privacidad</h2>
          <p className="mt-3 leading-relaxed">
            En esta demo los encargos se gestionan por teléfono. En un proyecto real se informaría
            del tratamiento de datos conforme al RGPD.
          </p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-medium text-bakery-ink">Cookies</h2>
          <p className="mt-3 leading-relaxed">
            Esta demostración no utiliza cookies de analítica ni publicidad.
          </p>
        </article>
      </div>
    </section>
  )
}

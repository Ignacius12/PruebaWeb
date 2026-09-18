import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const demos = [
  {
    to: '/restaurante',
    label: 'Restaurante',
    name: 'Casa Oliva',
    description:
      'Web premium para un restaurante mediterráneo: menú, reservas y ubicación pensados para convertir.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Mesa de restaurante con platos mediterráneos',
    accent: 'restaurant' as const,
  },
  {
    to: '/clinica',
    label: 'Clínica dental',
    name: 'Clínica Alba',
    description:
      'Web limpia y profesional para una clínica dental: tratamientos, confianza y cita por teléfono.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Recepción luminosa de clínica dental moderna',
    accent: 'clinic' as const,
  },
  {
    to: '/horno',
    label: 'Horno / panadería',
    name: 'Horno La Espiga',
    description:
      'Web tradicional y apetecible para un horno de barrio: panes del día, encargos y ubicación.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Panes artesanos recién horneados',
    accent: 'bakery' as const,
  },
]

const accentText = {
  restaurant: 'text-[#4f5d32]',
  clinic: 'text-[#1f5c63]',
  bakery: 'text-[#6b4226]',
}

const accentBtn = {
  restaurant: 'bg-[#4f5d32] hover:bg-[#3d4926]',
  clinic: 'bg-[#1f5c63] hover:bg-[#17484e]',
  bakery: 'bg-[#6b4226] hover:bg-[#4a2e1a]',
}

export function Hub() {
  useEffect(() => {
    document.title = 'Demo Studio | Webs de ejemplo para negocios'
  }, [])

  return (
    <div className="theme-hub min-h-svh bg-[#f7f8f6] text-[#1c1f1d]">
      <header className="border-b border-[#d8ddd6]">
        <div className="mx-auto flex w-[min(100%-2rem,72rem)] items-center justify-between py-5 md:py-6">
          <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.08em] md:text-2xl">
            DEMO STUDIO
          </p>
          <p className="text-sm text-[#5c645e]">Webs de ejemplo</p>
        </div>
      </header>

      <main className="mx-auto w-[min(100%-2rem,72rem)] pb-20 pt-12 md:pb-28 md:pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#3d6b5c]">
          Portfolio demo
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2.4rem] leading-[1.1] md:text-[3.5rem]">
          Elige una web de ejemplo
        </h1>
        <p className="mt-5 max-w-xl text-base text-[#5c645e] md:text-lg">
          Tres demos comerciales listas para enseñar a clientes. Misma base
          técnica, estética y conversión adaptadas a cada negocio.
        </p>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {demos.map((demo) => (
            <article key={demo.to} className="group flex flex-col">
              <Link
                to={demo.to}
                className="block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3d6b5c]"
                aria-label={`Ver demo de ${demo.name}`}
              >
                <img
                  src={demo.image}
                  alt={demo.imageAlt}
                  width={1200}
                  height={800}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
              <p
                className={`mt-5 text-xs font-medium uppercase tracking-[0.16em] ${accentText[demo.accent]}`}
              >
                {demo.label}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl md:text-[2.1rem]">
                {demo.name}
              </h2>
              <p className="mt-3 flex-1 text-[#5c645e]">{demo.description}</p>
              <Link
                to={demo.to}
                className={`mt-6 inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium text-white transition-colors ${accentBtn[demo.accent]}`}
              >
                Ver demo
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#d8ddd6]">
        <div className="mx-auto flex w-[min(100%-2rem,72rem)] flex-col gap-2 py-8 text-sm text-[#5c645e] sm:flex-row sm:justify-between">
          <p>Demos comerciales · no son negocios reales</p>
          <p>GitHub Pages · PruebaWeb</p>
        </div>
      </footer>
    </div>
  )
}

import { pub } from '../config'

export function PubJsonLd() {
  const { name, address, phone, hours, seo } = pub

  const openingHoursSpecification = hours
    .filter((h) => h.hours !== 'Cerrado')
    .flatMap((row) => {
      const dayMap: Record<string, string[]> = {
        'Martes – Jueves': ['Tuesday', 'Wednesday', 'Thursday'],
        'Viernes – Sábado': ['Friday', 'Saturday'],
        Domingo: ['Sunday'],
      }
      const days = dayMap[row.days] ?? []
      const [opens, closes] = row.hours.split('–').map((p) => p.trim())
      return days.map((day) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens,
        closes,
      }))
    })

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BarOrPub',
    name,
    image: seo.ogImage,
    url: seo.canonical,
    telephone: phone.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    openingHoursSpecification,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

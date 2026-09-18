import { bakery } from '../config'

export function BakeryJsonLd() {
  const { name, address, phone, hours, seo } = bakery

  const openingHoursSpecification = hours.flatMap((row) => {
    const dayMap: Record<string, string[]> = {
      'Lunes – Sábado': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
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
    '@type': 'Bakery',
    name,
    image: seo.ogImage,
    url: seo.canonical,
    telephone: phone.tel,
    servesCuisine: 'Bakery',
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

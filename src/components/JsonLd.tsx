import { restaurant } from '../config/restaurant'

export function JsonLd() {
  const { name, address, phone, cuisine, hours, seo } = restaurant

  const openingHoursSpecification = hours
    .filter((h) => h.hours !== 'Cerrado')
    .flatMap((row) => {
      const dayMap: Record<string, string[]> = {
        'Martes – Jueves': ['Tuesday', 'Wednesday', 'Thursday'],
        'Viernes – Sábado': ['Friday', 'Saturday'],
        Domingo: ['Sunday'],
      }
      const days = dayMap[row.days] ?? []
      const [opens, closes] = row.hours.split('–').map((part) => part.trim())
      return days.map((day) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: opens?.replace('.', ':'),
        closes: closes === '00:00' ? '00:00' : closes?.replace('.', ':'),
      }))
    })

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name,
    image: seo.ogImage,
    url: seo.canonical,
    telephone: phone.tel,
    servesCuisine: cuisine,
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

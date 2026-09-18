import { clinic } from '../config'

export function ClinicJsonLd() {
  const { name, address, phone, hours, seo } = clinic

  const openingHoursSpecification = hours
    .filter((h) => h.hours !== 'Cerrado')
    .flatMap((row) => {
      const dayMap: Record<string, string[]> = {
        'Lunes – Jueves': ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        Viernes: ['Friday'],
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
    '@type': 'Dentist',
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

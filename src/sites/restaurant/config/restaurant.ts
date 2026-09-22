import type { RestaurantConfig } from '../types'

/**
 * Restaurant branding & content config.
 * Swap this file (or override fields) to rebrand for another venue.
 */
export const restaurant: RestaurantConfig = {
  name: 'Casa Oliva',
  shortName: 'CASA OLIVA',
  tagline: 'Mesa larga, producto de temporada, aceite de verdad.',
  description:
    'Restaurante mediterráneo para cenas que se alargan: producto de temporada, platos para compartir y una mesa sin prisas en el centro de Madrid.',
  cuisine: 'Mediterránea',
  foundedYear: 2012,
  phone: {
    display: '+34 91 000 12 34',
    tel: '+34910001234',
  },
  email: 'reservas@casaoliva.demo',
  address: {
    street: 'Calle de la Oliva 18',
    city: 'Madrid',
    postalCode: '28013',
    region: 'Madrid',
    country: 'ES',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calle+de+la+Oliva+18,+Madrid',
  },
  hours: [
    { days: 'Martes – Jueves', hours: '13:00 – 23:30' },
    { days: 'Viernes – Sábado', hours: '13:00 – 00:00' },
    { days: 'Domingo', hours: '13:00 – 17:00' },
    { days: 'Lunes', hours: 'Cerrado' },
  ],
  social: {
    instagram: 'https://instagram.com/',
  },
  rating: {
    value: '4,8',
    source: 'Google',
  },
  seo: {
    title: 'Casa Oliva | Restaurante mediterráneo en Madrid',
    description:
      'Casa Oliva: cocina mediterránea de producto en Madrid. Consulta el menú, reserva mesa y descubre nuestra cocina de temporada.',
    canonical: 'https://ignacius12.github.io/PruebaWeb/restaurante',
    ogImage:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop',
  },
  hero: {
    title: 'Mesa larga, producto de temporada, aceite de verdad.',
    subtitle:
      'Para quienes reservan con ganas de compartir: cocina mediterránea de temporada, carta viva y una mesa pensada para quedarse.',
    image: {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop',
      alt: 'Mesa servida con platos mediterráneos en ambiente de restaurante',
      width: 1600,
      height: 1067,
    },
    meta: ['Para compartir', 'Producto de temporada', 'Reservas recomendadas'],
  },
  about: {
    title: 'Una cocina que empieza por el producto.',
    body: [
      'Cocinamos para la mesa compartida: aceite de oliva virgen, verdura de huerta, pescado del día y recetas mediterráneas con criterio de temporada.',
      'Si buscas una cena especial sin teatralidad —solo producto bueno y ritmo pausado— esta es tu mesa.',
      'Reservamos con calma, servimos sin prisa y cuidamos cada detalle para que la sobremesa sea tan buena como el plato.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format&fit=crop',
      alt: 'Interior cálido del restaurante con mesas de madera y luz natural',
      width: 1200,
      height: 1500,
    },
  },
  trust: [
    { id: 'rating', label: '4,8 en Google', icon: 'stars' },
    { id: 'local', label: 'Temporada y cercanía', icon: 'leaf' },
    { id: 'cuisine', label: 'Platos para compartir', icon: 'utensils' },
    { id: 'hours', label: 'Cenas sin prisa', icon: 'clock' },
  ],
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Menú', href: '#menu' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footerLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Menú', href: '#menu' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Reservas', href: '#reservas' },
  ],
  legalLinks: [
    { label: 'Aviso legal', href: '#aviso-legal' },
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Cookies', href: '#cookies' },
  ],
}

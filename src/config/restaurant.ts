import type { RestaurantConfig } from '../types'

/**
 * Restaurant branding & content config.
 * Swap this file (or override fields) to rebrand for another venue.
 */
export const restaurant: RestaurantConfig = {
  name: 'Casa Oliva',
  shortName: 'CASA OLIVA',
  tagline: 'Sabores mediterráneos, hechos para compartir.',
  description:
    'Cocina mediterránea de producto, tradición y temporada en el corazón de Madrid.',
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
    canonical: 'https://example.github.io/casa-oliva/',
    ogImage:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop',
  },
  hero: {
    title: 'Sabores mediterráneos, hechos para compartir.',
    subtitle:
      'Cocina mediterránea de producto, tradición y temporada en el corazón de Madrid.',
    image: {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop',
      alt: 'Mesa servida con platos mediterráneos en ambiente de restaurante',
      width: 1600,
      height: 1067,
    },
    meta: ['Madrid', 'Cocina mediterránea', 'Desde 2012'],
  },
  about: {
    title: 'Una cocina que empieza por el producto.',
    body: [
      'En Casa Oliva cocinamos con lo que la temporada nos trae: aceite de oliva virgen, verdura de huerta, pescado del día y recetas mediterráneas que se sienten cercanas.',
      'Un espacio cálido en el centro de Madrid, pensado para compartir mesa sin prisas — de martes a domingo.',
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
    { id: 'local', label: 'Producto local', icon: 'leaf' },
    { id: 'cuisine', label: 'Cocina mediterránea', icon: 'utensils' },
    { id: 'hours', label: 'Abierto de martes a domingo', icon: 'clock' },
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

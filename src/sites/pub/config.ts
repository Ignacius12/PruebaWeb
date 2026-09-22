export interface PubConfig {
  name: string
  tagline: string
  description: string
  phone: { display: string; tel: string }
  address: {
    street: string
    city: string
    postalCode: string
    region: string
    country: string
    mapsUrl: string
  }
  hours: { days: string; hours: string }[]
  seo: {
    title: string
    description: string
    canonical: string
    ogImage: string
  }
  hero: {
    title: string
    subtitle: string
    image: { src: string; alt: string; width: number; height: number }
  }
  atmosphere: {
    title: string
    body: string
    points: string[]
  }
  drinks: {
    id: string
    name: string
    description: string
    price: string
  }[]
  bites: {
    id: string
    name: string
    description: string
    price: string
  }[]
  nights: {
    id: string
    day: string
    title: string
    description: string
  }[]
  gallery: {
    id: string
    src: string
    alt: string
    width: number
    height: number
  }[]
  nav: { label: string; href: string }[]
  footerLinks: { label: string; href: string }[]
  legalLinks: { label: string; href: string }[]
}

export const pub: PubConfig = {
  name: 'El Candil',
  tagline: 'Luz baja, caña fría y conversación larga.',
  description:
    'Pub de barrio en Madrid para quedar con amigos, tomarse algo sin prisa y quedarse más de lo previsto.',
  phone: {
    display: '+34 91 000 33 21',
    tel: '+34910003321',
  },
  address: {
    street: 'Calle de la Palma 27',
    city: 'Madrid',
    postalCode: '28004',
    region: 'Madrid',
    country: 'ES',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calle+de+la+Palma+27,+Madrid',
  },
  hours: [
    { days: 'Martes – Jueves', hours: '18:00 – 01:00' },
    { days: 'Viernes – Sábado', hours: '18:00 – 02:30' },
    { days: 'Domingo', hours: '18:00 – 00:00' },
    { days: 'Lunes', hours: 'Cerrado' },
  ],
  seo: {
    title: 'El Candil | Pub acogedor en Madrid',
    description:
      'Pub de barrio en Malasaña: cañas, vermut, música suave y buen ambiente. Reserva mesa para grupos por teléfono.',
    canonical: 'https://ignacius12.github.io/PruebaWeb/pub',
    ogImage:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80&auto=format&fit=crop',
  },
  hero: {
    title: 'Luz baja, caña fría y conversación larga.',
    subtitle:
      'Un pub para después del trabajo, el finde o esa noche que empieza “solo un rato”. Madera, buena música y sitio para quedarse.',
    image: {
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80&auto=format&fit=crop',
      alt: 'Interior cálido de pub con barra de madera y luz ambientada',
      width: 1600,
      height: 1067,
    },
  },
  atmosphere: {
    title: 'El ambiente lo es casi todo.',
    body: 'Venimos a vernos, a escuchar y a bajar el ritmo. Sin estridencias: buena compañía, copas bien servidas y una barra que conoce tu nombre si vuelves.',
    points: [
      'Mesas altas y rincones para grupos',
      'Música a volumen de conversación',
      'Terraza cuando el tiempo acompaña',
    ],
  },
  drinks: [
    {
      id: 'cana',
      name: 'Caña bien tirada',
      description: 'La de siempre, fría y con su espuma',
      price: '2,20 €',
    },
    {
      id: 'clara',
      name: 'Clara con limón',
      description: 'Ligera para empezar la noche',
      price: '2,40 €',
    },
    {
      id: 'vermut',
      name: 'Vermut de grifo',
      description: 'Con naranja y aceituna',
      price: '3,50 €',
    },
    {
      id: 'gintonic',
      name: 'Gin-tonic de la casa',
      description: 'Botánico, sin florituras innecesarias',
      price: '8,50 €',
    },
    {
      id: 'vino',
      name: 'Copa de tinto',
      description: 'Selección rotativa de la semana',
      price: '3,80 €',
    },
    {
      id: 'sin',
      name: 'Cerveza sin alcohol',
      description: 'También hay noche sin resaca',
      price: '2,50 €',
    },
  ],
  bites: [
    {
      id: 'patatas',
      name: 'Patatas bravas',
      description: 'Salsa propia, picante suave',
      price: '5,50 €',
    },
    {
      id: 'tabla',
      name: 'Tabla de embutido',
      description: 'Para compartir entre cañas',
      price: '11 €',
    },
    {
      id: 'bocata',
      name: 'Bocata de calamares',
      description: 'Clásico de barra, sin rodeos',
      price: '6,50 €',
    },
    {
      id: 'nachos',
      name: 'Nachos del Candil',
      description: 'Queso, guacamole y jalapeños',
      price: '8 €',
    },
  ],
  nights: [
    {
      id: 'jueves',
      day: 'Jueves',
      title: 'Sesión acústica',
      description: 'Música en directo suave a partir de las 21:00.',
    },
    {
      id: 'viernes',
      day: 'Viernes',
      title: 'Afterwork largo',
      description: 'Caña + tapa de bienvenida hasta las 20:00.',
    },
    {
      id: 'sabado',
      day: 'Sábado',
      title: 'Noche de grupos',
      description: 'Reservas para mesas de 6 o más por teléfono.',
    },
  ],
  gallery: [
    {
      id: 'g1',
      src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&q=80&auto=format&fit=crop',
      alt: 'Gente disfrutando en un bar con ambiente cálido',
      width: 900,
      height: 700,
    },
    {
      id: 'g2',
      src: 'https://images.unsplash.com/photo-1436072032612-9691a4151939?w=900&q=80&auto=format&fit=crop',
      alt: 'Cañas de cerveza servidas en barra',
      width: 900,
      height: 1100,
    },
    {
      id: 'g3',
      src: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=900&q=80&auto=format&fit=crop',
      alt: 'Detalle de cerveza artesana en vaso',
      width: 900,
      height: 700,
    },
    {
      id: 'g4',
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80&auto=format&fit=crop',
      alt: 'Barra de pub con luz cálida',
      width: 900,
      height: 900,
    },
  ],
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Ambiente', href: '#ambiente' },
    { label: 'Carta', href: '#carta' },
    { label: 'Noches', href: '#noches' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footerLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Carta', href: '#carta' },
    { label: 'Noches', href: '#noches' },
    { label: 'Reservas', href: '#reservas' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legalLinks: [
    { label: 'Aviso legal', href: '#aviso-legal' },
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Cookies', href: '#cookies' },
  ],
}

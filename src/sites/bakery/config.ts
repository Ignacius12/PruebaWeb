export interface BakeryConfig {
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
    meta: string[]
  }
  about: {
    title: string
    body: string[]
    image: { src: string; alt: string; width: number; height: number }
  }
  trust: { id: string; label: string }[]
  products: {
    id: string
    name: string
    description: string
    price: string
  }[]
  specialties: {
    id: string
    name: string
    description: string
    image: { src: string; alt: string }
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

export const bakery: BakeryConfig = {
  name: 'Horno La Espiga',
  tagline: 'Pan de verdad, cada mañana.',
  description:
    'Horno tradicional de barrio en Madrid. Amasamos despacio, horneamos cada día y vendemos pan y bollería recién hechos.',
  phone: {
    display: '+34 91 000 78 90',
    tel: '+34910007890',
  },
  address: {
    street: 'Calle del Panadero 9',
    city: 'Madrid',
    postalCode: '28005',
    region: 'Madrid',
    country: 'ES',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calle+del+Panadero+9,+Madrid',
  },
  hours: [
    { days: 'Lunes – Sábado', hours: '07:00 – 15:00' },
    { days: 'Domingo', hours: '08:00 – 14:00' },
  ],
  seo: {
    title: 'Horno La Espiga | Panadería tradicional en Madrid',
    description:
      'Horno de pan tradicional en Madrid. Pan del día, bollería artesana y encargos. Abierto de madrugada.',
    canonical: 'https://ignacius12.github.io/PruebaWeb/horno',
    ogImage:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop',
  },
  hero: {
    title: 'Pan de verdad, cada mañana.',
    subtitle:
      'Masa madre, harina seleccionada y el olor del barrio al abrir la puerta. Así empieza el día en La Espiga.',
    image: {
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80&auto=format&fit=crop',
      alt: 'Panes artesanos recién horneados sobre madera',
      width: 1600,
      height: 1067,
    },
    meta: ['Desde 1987', 'Madrid', 'Horneado cada día'],
  },
  about: {
    title: 'Un horno de toda la vida, con el cuidado de siempre.',
    body: [
      'En La Espiga seguimos el ritmo del pan: amasado lento, fermentación larga y hornada temprana. No hay atajos ni pan de ayer disfrazado.',
      'Ven a por la barra del día, la ensaimada del domingo o un encargo para la mesa familiar. Te esperamos con el delantal puesto.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop',
      alt: 'Interior de panadería con croissants y mostrador de madera',
      width: 1200,
      height: 1500,
    },
  },
  trust: [
    { id: 'daily', label: 'Hornada diaria' },
    { id: 'local', label: 'Harina de cercanía' },
    { id: 'family', label: 'Oficio familiar' },
    { id: 'early', label: 'Abrimos a las 7:00' },
  ],
  products: [
    {
      id: 'barra',
      name: 'Barra de pueblo',
      description: 'Corteza crujiente y miga alveolada',
      price: '1,40 €',
    },
    {
      id: 'masa-madre',
      name: 'Hogaza de masa madre',
      description: 'Fermentación lenta de 18 horas',
      price: '3,80 €',
    },
    {
      id: 'integral',
      name: 'Pan integral de espelta',
      description: 'Con semillas tostadas',
      price: '3,20 €',
    },
    {
      id: 'croissant',
      name: 'Croissant de mantequilla',
      description: 'Hojaldre laminado a mano',
      price: '1,60 €',
    },
    {
      id: 'ensaimada',
      name: 'Ensaimada',
      description: 'Clásica o rellena de cabello de ángel',
      price: '2,40 €',
    },
    {
      id: 'empanada',
      name: 'Empanada gallega',
      description: 'Del día · atún o carne',
      price: '2,90 €',
    },
  ],
  specialties: [
    {
      id: 'domingo',
      name: 'Cesta del domingo',
      description: 'Hogaza, bollería y un dulce de temporada para la mesa.',
      image: {
        src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=900&q=80&auto=format&fit=crop',
        alt: 'Pan rústico recién cortado',
      },
    },
    {
      id: 'fiesta',
      name: 'Encargos para fiestas',
      description: 'Bandejas de bollería y pan para celebraciones del barrio.',
      image: {
        src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80&auto=format&fit=crop',
        alt: 'Cupcakes y bollería dulce artesanal',
      },
    },
  ],
  gallery: [
    {
      id: 'g1',
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop',
      alt: 'Variedad de panes artesanos',
      width: 900,
      height: 700,
    },
    {
      id: 'g2',
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80&auto=format&fit=crop',
      alt: 'Croissants en el mostrador',
      width: 900,
      height: 1100,
    },
    {
      id: 'g3',
      src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80&auto=format&fit=crop',
      alt: 'Fachada de panadería tradicional',
      width: 900,
      height: 700,
    },
    {
      id: 'g4',
      src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=900&q=80&auto=format&fit=crop',
      alt: 'Panes en cestas de mimbre',
      width: 900,
      height: 900,
    },
  ],
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'El horno', href: '#horno' },
    { label: 'Panes', href: '#panes' },
    { label: 'Encargos', href: '#encargos' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footerLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Panes', href: '#panes' },
    { label: 'Encargos', href: '#encargos' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legalLinks: [
    { label: 'Aviso legal', href: '#aviso-legal' },
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Cookies', href: '#cookies' },
  ],
}

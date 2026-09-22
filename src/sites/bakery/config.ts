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
    image: { src: string; alt: string; width: number; height: number }
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
  tagline: 'El pan del barrio, todavía caliente.',
  description:
    'Horno de toda la vida para la compra de la mañana: barra crujiente, bollería del día y encargos para el domingo.',
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
    title: 'El pan del barrio, todavía caliente.',
    subtitle:
      'Para la compra rápida de la mañana y el encargo del domingo. Amasamos despacio, abrimos temprano y vendemos lo de hoy.',
    image: {
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80&auto=format&fit=crop',
      alt: 'Panes artesanos recién horneados sobre madera',
      width: 1600,
      height: 1067,
    },
    meta: ['Abierto a las 7:00', 'Hornada diaria', 'Encargos de domingo'],
  },
  about: {
    title: 'El mismo oficio, la misma calle.',
    body: [
      'Si pasas de camino al trabajo o bajas a por el pan del fin de semana, aquí encuentras corteza crujiente y miga con memoria.',
      'Sin atajos: fermentación larga, harina seleccionada y mostrador que se vacía según sale la hornada.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop',
      alt: 'Interior de panadería con croissants y mostrador de madera',
      width: 1200,
      height: 1500,
    },
  },
  trust: [
    { id: 'daily', label: 'Sale de madrugada' },
    { id: 'local', label: 'Harina de cercanía' },
    { id: 'family', label: 'Oficio de barrio' },
    { id: 'early', label: 'Cola corta, pan caliente' },
  ],
  products: [
    {
      id: 'barra',
      name: 'Barra de pueblo',
      description: 'Corteza crujiente y miga alveolada',
      price: '1,40 €',
      image: {
        src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1000&q=80&auto=format&fit=crop',
        alt: 'Barra de pan rústica recién horneada',
        width: 1000,
        height: 750,
      },
    },
    {
      id: 'masa-madre',
      name: 'Hogaza de masa madre',
      description: 'Fermentación lenta de 18 horas',
      price: '3,80 €',
      image: {
        src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=80&auto=format&fit=crop',
        alt: 'Hogaza de masa madre sobre madera',
        width: 1000,
        height: 750,
      },
    },
    {
      id: 'integral',
      name: 'Pan integral de espelta',
      description: 'Con semillas tostadas',
      price: '3,20 €',
      image: {
        src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=1000&q=80&auto=format&fit=crop',
        alt: 'Pan integral con semillas en cesta',
        width: 1000,
        height: 750,
      },
    },
    {
      id: 'croissant',
      name: 'Croissant de mantequilla',
      description: 'Hojaldre laminado a mano',
      price: '1,60 €',
      image: {
        src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=80&auto=format&fit=crop',
        alt: 'Croissants de mantequilla en el mostrador',
        width: 1000,
        height: 750,
      },
    },
    {
      id: 'ensaimada',
      name: 'Ensaimada',
      description: 'Clásica o rellena de cabello de ángel',
      price: '2,40 €',
      image: {
        src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&q=80&auto=format&fit=crop',
        alt: 'Bollería dulce artesanal',
        width: 1000,
        height: 750,
      },
    },
    {
      id: 'empanada',
      name: 'Empanada gallega',
      description: 'Del día · atún o carne',
      price: '2,90 €',
      image: {
        src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1000&q=80&auto=format&fit=crop',
        alt: 'Mostrador de panadería con productos del día',
        width: 1000,
        height: 750,
      },
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

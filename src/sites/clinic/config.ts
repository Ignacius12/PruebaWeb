export interface ClinicConfig {
  name: string
  shortName: string
  tagline: string
  description: string
  phone: { display: string; tel: string }
  email: string
  address: {
    street: string
    city: string
    postalCode: string
    region: string
    country: string
    mapsUrl: string
  }
  hours: { days: string; hours: string }[]
  social: { instagram: string }
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
  about: {
    title: string
    body: string[]
    image: { src: string; alt: string; width: number; height: number }
  }
  trust: { id: string; label: string; value: string }[]
  treatments: {
    id: string
    name: string
    description: string
  }[]
  team: {
    id: string
    name: string
    role: string
    image: { src: string; alt: string }
  }[]
  nav: { label: string; href: string }[]
  footerLinks: { label: string; href: string }[]
  legalLinks: { label: string; href: string }[]
}

export const clinic: ClinicConfig = {
  name: 'Clínica Alba',
  shortName: 'CLÍNICA ALBA',
  tagline: 'Odontología cercana, precisa y sin prisas.',
  description:
    'Clínica dental en Madrid orientada al cuidado preventivo, la estética natural y una experiencia tranquila para cada paciente.',
  phone: {
    display: '+34 91 000 45 67',
    tel: '+34910004567',
  },
  email: 'citas@clinicaalba.demo',
  address: {
    street: 'Calle de Núñez de Balboa 42',
    city: 'Madrid',
    postalCode: '28001',
    region: 'Madrid',
    country: 'ES',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Calle+de+Nunez+de+Balboa+42,+Madrid',
  },
  hours: [
    { days: 'Lunes – Jueves', hours: '09:30 – 20:00' },
    { days: 'Viernes', hours: '09:30 – 15:00' },
    { days: 'Sábado – Domingo', hours: 'Cerrado' },
  ],
  social: {
    instagram: 'https://instagram.com/',
  },
  seo: {
    title: 'Clínica Alba | Odontología en Madrid',
    description:
      'Clínica dental en Madrid. Tratamientos, equipo y cita telefónica. Cuidado claro, cercano y profesional.',
    canonical: 'https://ignacius12.github.io/PruebaWeb/clinica',
    ogImage:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop',
  },
  hero: {
    title: 'Odontología cercana, precisa y sin prisas.',
    subtitle:
      'Escuchamos, explicamos y cuidamos tu sonrisa con un enfoque preventivo y un trato humano.',
    image: {
      src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80&auto=format&fit=crop',
      alt: 'Consulta dental moderna y luminosa',
      width: 1600,
      height: 1067,
    },
  },
  about: {
    title: 'Una clínica pensada para que te sientas tranquilo.',
    body: [
      'En Clínica Alba priorizamos la claridad: te explicamos cada paso, los tiempos y las opciones sin tecnicismos innecesarios.',
      'Trabajamos con protocolos actuales, materiales de calidad y un ritmo que respeta tu tiempo y tu comodidad.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80&auto=format&fit=crop',
      alt: 'Profesional sanitario en ambiente clínico limpio',
      width: 1200,
      height: 1500,
    },
  },
  trust: [
    { id: 'years', value: '+12', label: 'años de trayectoria' },
    { id: 'team', value: 'Equipo', label: 'especializado y cercano' },
    { id: 'first', value: '1ª visita', label: 'valoración clara' },
    { id: 'hours', value: 'L–V', label: 'horario de consulta' },
  ],
  treatments: [
    {
      id: 'higiene',
      name: 'Higiene y prevención',
      description: 'Limpiezas, revisiones y hábitos para mantener tu salud bucal.',
    },
    {
      id: 'estetica',
      name: 'Estética dental',
      description: 'Blanqueamiento y sonrisas naturales, sin exagerar el resultado.',
    },
    {
      id: 'ortodoncia',
      name: 'Ortodoncia',
      description: 'Alineación con criterios funcionales y estéticos equilibrados.',
    },
    {
      id: 'implantes',
      name: 'Implantología',
      description: 'Reposición de piezas con planificación cuidadosa y seguimiento.',
    },
    {
      id: 'endodoncia',
      name: 'Endodoncia',
      description: 'Tratamientos conservadores para salvar piezas dañadas.',
    },
    {
      id: 'pediatrica',
      name: 'Odontopediatría',
      description: 'Cuidado infantil en un entorno calmado y comprensible.',
    },
  ],
  team: [
    {
      id: 'dra-alba',
      name: 'Dra. Elena Alba',
      role: 'Directora médica · Odontología general',
      image: {
        src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop',
        alt: 'Retrato profesional de la Dra. Elena Alba',
      },
    },
    {
      id: 'dr-ruiz',
      name: 'Dr. Marcos Ruiz',
      role: 'Implantología y cirugía oral',
      image: {
        src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop',
        alt: 'Retrato profesional del Dr. Marcos Ruiz',
      },
    },
    {
      id: 'dra-sanz',
      name: 'Dra. Lucía Sanz',
      role: 'Ortodoncia y estética',
      image: {
        src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop',
        alt: 'Retrato profesional de la Dra. Lucía Sanz',
      },
    },
  ],
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Clínica', href: '#clinica' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ],
  footerLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Cita', href: '#cita' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legalLinks: [
    { label: 'Aviso legal', href: '#aviso-legal' },
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Cookies', href: '#cookies' },
  ],
}

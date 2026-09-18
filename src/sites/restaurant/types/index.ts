export type MenuCategoryId =
  | 'compartir'
  | 'entrantes'
  | 'principales'
  | 'arroces'
  | 'postres'
  | 'bebidas'

export interface MenuCategory {
  id: MenuCategoryId
  label: string
}

export interface MenuItem {
  id: string
  category: MenuCategoryId
  name: string
  description: string
  price: number
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  span?: 'normal' | 'wide' | 'tall'
}

export interface NavLink {
  label: string
  href: string
}

export interface OpeningHours {
  days: string
  hours: string
}

export interface TrustItem {
  id: string
  label: string
  icon?: 'stars' | 'leaf' | 'utensils' | 'clock'
}

export interface RestaurantConfig {
  name: string
  shortName: string
  tagline: string
  description: string
  about: {
    title: string
    body: string[]
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
  }
  cuisine: string
  foundedYear: number
  phone: {
    display: string
    tel: string
  }
  email: string
  address: {
    street: string
    city: string
    postalCode: string
    region: string
    country: string
    mapsUrl: string
  }
  hours: OpeningHours[]
  social: {
    instagram: string
  }
  rating: {
    value: string
    source: string
  }
  seo: {
    title: string
    description: string
    canonical: string
    ogImage: string
  }
  hero: {
    title: string
    subtitle: string
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
    meta: string[]
  }
  trust: TrustItem[]
  nav: NavLink[]
  footerLinks: NavLink[]
  legalLinks: NavLink[]
}

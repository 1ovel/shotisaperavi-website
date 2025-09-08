export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityReference {
  _type: 'reference'
  _ref: string
}

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface SanityLocation extends SanityDocument {
  _type: 'location'
  slug: SanitySlug
  title: string
  address: string
  description: string
  fullDescription?: string
  phone: string
  email: string
  image: SanityImage
}

export interface SanitySchedule extends SanityDocument {
  _type: 'schedule'
  days: string
  openTime: string
  closeTime: string
  location: SanityReference
}

export interface SanityMenu extends SanityDocument {
  _type: 'menu'
  location: SanityReference
}

export interface SanityMenuSection extends SanityDocument {
  _type: 'menuSection'
  title: string
  decorator?: string
  menu: SanityReference
}

export interface SanityMenuItem extends SanityDocument {
  _type: 'menuItem'
  title: string
  description: string
  price: number
  menuSection: SanityReference
}

export interface SanityLocationWithSchedule extends Omit<SanityLocation, 'image'> {
  image: SanityImage
  schedule: SanitySchedule[]
}

export interface SanityMenuWithLocation extends Omit<SanityMenu, 'location'> {
  location: {
    _id: string
    slug: SanitySlug
    title: string
  }
  menuSections: SanityMenuSectionWithItems[]
}

export interface SanityMenuSectionWithItems extends Omit<SanityMenuSection, 'menu'> {
  menuItems: SanityMenuItem[]
}

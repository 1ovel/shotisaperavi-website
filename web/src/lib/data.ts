'use server'

import { client, queries, urlFor } from './sanity'
import { LocationInfo, MenuInfo, SanityLocationWithSchedule, SanityMenuWithLocation } from '@/types'

function transformLocation(sanityLocation: SanityLocationWithSchedule): LocationInfo {
  return {
    id: sanityLocation._id,
    slug: sanityLocation.slug.current,
    title: sanityLocation.title,
    address: sanityLocation.address,
    description: sanityLocation.description,
    fullDescription: sanityLocation.fullDescription || '',
    phone: sanityLocation.phone,
    email: sanityLocation.email,
    imageSrc: sanityLocation.image ? urlFor(sanityLocation.image).url() : '',
    schedule: sanityLocation.schedule?.map((s) => ({
      id: s._id,
      days: s.days,
      openTime: s.openTime,
      closeTime: s.closeTime,
      locationId: sanityLocation._id,
    })) || [],
    createdAt: sanityLocation._createdAt ? new Date(sanityLocation._createdAt) : undefined,
    updatedAt: sanityLocation._updatedAt ? new Date(sanityLocation._updatedAt) : undefined,
  }
}

function transformMenu(sanityMenu: SanityMenuWithLocation): MenuInfo {
  return {
    id: sanityMenu._id,
    locationId: sanityMenu.location._id,
    menuSections: sanityMenu.menuSections?.map((section) => ({
      id: section._id,
      title: section.title,
      decorator: section.decorator || '',
      menuId: sanityMenu._id,
      menuItems: section.menuItems?.map((item) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        price: item.price,
        menuSectionId: section._id,
        createdAt: item._createdAt ? new Date(item._createdAt) : undefined,
        updatedAt: item._updatedAt ? new Date(item._updatedAt) : undefined,
      })) || [],
      createdAt: section._createdAt ? new Date(section._createdAt) : undefined,
      updatedAt: section._updatedAt ? new Date(section._updatedAt) : undefined,
    })) || [],
    createdAt: sanityMenu._createdAt ? new Date(sanityMenu._createdAt) : undefined,
    updatedAt: sanityMenu._updatedAt ? new Date(sanityMenu._updatedAt) : undefined,
  }
}

export async function getLocations(): Promise<LocationInfo[]> {
  try {
    const sanityLocations = await client.fetch(queries.locations) as SanityLocationWithSchedule[]
    return sanityLocations.map(transformLocation)
  } catch (error) {
    console.error('Error fetching locations:', error)
    return []
  }
}

export async function getLocationBySlug(slug: string): Promise<LocationInfo | null> {
  try {
    const sanityLocation = await client.fetch(queries.locationBySlug, { slug }) as SanityLocationWithSchedule | null
    return sanityLocation ? transformLocation(sanityLocation) : null
  } catch (error) {
    console.error('Error fetching location by slug:', error)
    return null
  }
}

export async function getMenus(): Promise<MenuInfo[]> {
  try {
    const sanityMenus = await client.fetch(queries.menus) as SanityMenuWithLocation[]
    return sanityMenus.map(transformMenu)
  } catch (error) {
    console.error('Error fetching menus:', error)
    return []
  }
}

export async function getMenuByLocation(slug: string): Promise<MenuInfo | null> {
  try {
    const sanityMenu = await client.fetch(queries.menuByLocation, { slug }) as SanityMenuWithLocation | null
    return sanityMenu ? transformMenu(sanityMenu) : null
  } catch (error) {
    console.error('Error fetching menu by location:', error)
    return null
  }
}

export async function getLocationWithMenu(slug: string): Promise<LocationInfo | null> {
  try {
    const [location, menu] = await Promise.all([
      getLocationBySlug(slug),
      getMenuByLocation(slug)
    ])
    
    if (location && menu) {
      location.menu = menu
    }
    
    return location
  } catch (error) {
    console.error('Error fetching location with menu:', error)
    return null
  }
}

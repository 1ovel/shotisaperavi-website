import { SanityImage } from '@/types'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.SANITY_API_VERSION,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

export const queries = {
  locations: `*[_type == "location"] | order(_createdAt asc) {
    _id,
    slug,
    title,
    address,
    description,
    fullDescription,
    phone,
    email,
    image,
    "schedule": *[_type == "schedule" && references(^._id)] {
      _id,
      days,
      openTime,
      closeTime
    }
  }`,
  
  locationBySlug: `*[_type == "location" && slug.current == $slug][0] {
    _id,
    slug,
    title,
    address,
    description,
    fullDescription,
    phone,
    email,
    image,
    "schedule": *[_type == "schedule" && references(^._id)] {
      _id,
      days,
      openTime,
      closeTime
    }
  }`,
  
  menus: `*[_type == "menu"] | order(_createdAt asc) {
    _id,
    "location": location-> {
      _id,
      slug,
      title
    },
    "menuSections": *[_type == "menuSection" && references(^._id)] | order(_createdAt asc) {
      _id,
      title,
      decorator,
      "menuItems": *[_type == "menuItem" && references(^._id)] | order(_createdAt asc) {
        _id,
        title,
        description,
        price
      }
    }
  }`,
  
  menuByLocation: `*[_type == "menu" && references(*[_type == "location" && slug.current == $slug]._id)][0] {
    _id,
    "location": location-> {
      _id,
      slug,
      title
    },
    "menuSections": *[_type == "menuSection" && references(^._id)] | order(_createdAt asc) {
      _id,
      title,
      decorator,
      "menuItems": *[_type == "menuItem" && references(^._id)] | order(_createdAt asc) {
        _id,
        title,
        description,
        price
      }
    }
  }`
}

import { MetadataRoute } from 'next'
import { getLocations } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  let restaurantPages: MetadataRoute.Sitemap = []
  
  try {
    const locations = await getLocations()
    restaurantPages = locations.map((location) => ({
      url: `${baseUrl}/restaurant/${location.slug}`,
      lastModified: location.updatedAt || location.createdAt || new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching locations for sitemap:', error)
  }

  return [...staticPages, ...restaurantPages]
}

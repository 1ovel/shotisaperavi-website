import { NextResponse } from 'next/server'
import { getLocations } from '@/lib/data'

export async function GET() {
  try {
    const locations = await getLocations()
    return NextResponse.json({ 
      success: true, 
      count: locations.length,
      locations: locations.map(l => ({ id: l.id, title: l.title, slug: l.slug }))
    })
  } catch (error) {
    console.error('Error fetching locations:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}

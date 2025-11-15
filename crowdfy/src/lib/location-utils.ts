const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  'Saint Martin': { lat: 18.0708, lng: -63.0501 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'São Paulo': { lat: -23.5505, lng: -46.6333 },
  'São Paulo, Brazil': { lat: -23.5505, lng: -46.6333 },
  'Brazil': { lat: -14.235, lng: -51.9253 },
  'United States': { lat: 37.0902, lng: -95.7129 },
  'USA': { lat: 37.0902, lng: -95.7129 },
  'New York': { lat: 40.7128, lng: -74.006 },
  'London': { lat: 51.5074, lng: -0.1278 },
  'Paris': { lat: 48.8566, lng: 2.3522 },
  'Tokyo': { lat: 35.6762, lng: 139.6503 },
  'Unknown location': { lat: 0, lng: 0 },
}

// Default center (São Paulo)
const DEFAULT_CENTER = { lat: -23.5505, lng: -46.6333 }

export function getLocationCoordinates(location: string): { lat: number; lng: number } {
  // Try exact match first
  if (locationCoordinates[location]) {
    return locationCoordinates[location]
  }

  // Try to find partial match
  const normalizedLocation = location.toLowerCase().trim()
  for (const [key, coords] of Object.entries(locationCoordinates)) {
    if (normalizedLocation.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedLocation)) {
      return coords
    }
  }

  // If location contains a city name, try to extract it
  const cityMatch = location.split(',')[0]?.trim()
  if (cityMatch && locationCoordinates[cityMatch]) {
    return locationCoordinates[cityMatch]
  }

  // Return default or add some random offset for unknown locations
  return DEFAULT_CENTER
}

export function getMapCenter(campaigns: Array<{ location: string }>): { lat: number; lng: number } {
  if (campaigns.length === 0) {
    return DEFAULT_CENTER
  }

  const coordinates = campaigns.map((campaign) => getLocationCoordinates(campaign.location))
  const avgLat = coordinates.reduce((sum, coord) => sum + coord.lat, 0) / coordinates.length
  const avgLng = coordinates.reduce((sum, coord) => sum + coord.lng, 0) / coordinates.length

  return { lat: avgLat, lng: avgLng }
}


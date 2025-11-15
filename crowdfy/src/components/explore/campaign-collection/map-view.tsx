import { MapContainer, TileLayer } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import type { Campaign } from '@/data/campaigns'

interface MapViewProps {
  mapCenter: { lat: number; lng: number }
  filteredCampaigns: Campaign[]
}

const DEFAULT_ZOOM = 2
const CAMPAIGNS_ZOOM = 6

export function MapView({ mapCenter, filteredCampaigns }: MapViewProps) {
  const zoom = filteredCampaigns.length > 0 ? CAMPAIGNS_ZOOM : DEFAULT_ZOOM

  return (
    <div className="flex-1">
      <MapContainer
        center={[mapCenter.lat, mapCenter.lng] as LatLngExpression}
        zoom={zoom}
        className="h-full w-full rounded-3xl"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}


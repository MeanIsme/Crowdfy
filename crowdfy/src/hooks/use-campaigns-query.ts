import { useQuery } from '@tanstack/react-query'

import type { Campaign, CampaignType } from '@/data/campaigns'

interface ApiCampaign {
  id: string
  type: 'donation' | 'petition'
  title: string
  description: string
  creator: {
    name: string
    avatar: string
    verified: boolean
  }
  image: string
  amount: {
    raised: number
    currency: string
  }
  percentage: number
  location?: string
  supporters?: number
  createdAt: string
}

interface ApiCampaignsResponse {
  campaigns: ApiCampaign[]
  total: number
  page: number
  pageSize: number
}

const API_URL =
  (import.meta.env.VITE_CROWDFY_API_URL as string | undefined)?.trim() || 'http://localhost:3000/api/campaigns'

const typeMap: Record<ApiCampaign['type'], CampaignType> = {
  donation: 'donation',
  petition: 'petition',
}

function mapCampaign(apiCampaign: ApiCampaign): Campaign {
  const amountRaised = apiCampaign.amount.raised
  const safePercentage = Number.isFinite(apiCampaign.percentage) ? apiCampaign.percentage : 0
  const goal =
    safePercentage > 0 ? Number((amountRaised / (safePercentage / 100)).toFixed(2)) : Number(amountRaised.toFixed(2))

  return {
    id: apiCampaign.id,
    title: apiCampaign.title,
    description: apiCampaign.description,
    image: apiCampaign.image,
    creator: {
      name: apiCampaign.creator.name,
      avatar: apiCampaign.creator.avatar,
      verified: apiCampaign.creator.verified,
    },
    type: typeMap[apiCampaign.type],
    amountRaised: Number(amountRaised.toFixed(2)),
    goal,
    backers: apiCampaign.supporters ?? 0,
    createdAt: apiCampaign.createdAt,
    location: apiCampaign.location ?? 'Unknown location',
    currency: apiCampaign.amount.currency ?? '€',
    percentage: safePercentage,
  }
}

async function fetchCampaigns(signal?: AbortSignal): Promise<Campaign[]> {
  const response = await fetch(API_URL, {
    signal,
  })

  if (!response.ok) {
    throw new Error('Failed to fetch campaigns')
  }

  const data = (await response.json()) as ApiCampaignsResponse
  return data.campaigns.map(mapCampaign)
}

export function useCampaignsQuery() {
  return useQuery({
    queryKey: ['campaigns'],
    queryFn: ({ signal }) => fetchCampaigns(signal),
    staleTime: 1000 * 60 * 5,
  })
}


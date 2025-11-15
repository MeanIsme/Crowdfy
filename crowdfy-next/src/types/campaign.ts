export type CampaignType = 'donation' | 'petition'

export interface Campaign {
  id: string
  type: CampaignType
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

export interface CampaignsResponse {
  campaigns: Campaign[]
  total: number
  page: number
  pageSize: number
}


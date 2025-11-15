export type CampaignType = 'petition' | 'donation'

export interface CampaignCreator {
  name: string
  avatar: string
  verified?: boolean
}

export interface Campaign {
  id: string
  title: string
  description: string
  image: string
  creator: CampaignCreator
  type: CampaignType
  amountRaised: number
  goal: number
  backers: number
  createdAt: string
  location: string
  currency: string
  percentage: number
}

import type { Campaign } from '@/data/campaigns'

/**
 * Calculates campaign funding percentage
 */
export function calculatePercentage(campaign: Campaign): number {
  if (campaign.percentage != null) {
    return campaign.percentage
  }

  const percentage = Math.round((campaign.amountRaised / Math.max(campaign.goal, 1)) * 100)
  return Math.min(100, percentage)
}

/**
 * Formats amount with currency
 */
export function formatAmount(value: number, currency: string = '$'): string {
  return `${currency}${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

/**
 * Gets campaign type label
 */
export function getCampaignTypeLabel(type: Campaign['type']): string {
  return type === 'donation' ? 'Donations' : 'Petition'
}

/**
 * Gets campaign type badge styles
 */
export function getCampaignTypeBadgeStyles(type: Campaign['type']): string {
  return type === 'donation'
    ? 'border-green-500/30 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400'
    : 'border-blue-500/30 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400'
}


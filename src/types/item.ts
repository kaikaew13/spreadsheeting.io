export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'

export type ItemKind = 'weapon' | 'armor' | 'consumable' | 'valuable'

export interface ItemStats {
  attack?: number
  defense?: number
  heal?: number
}

export interface Item {
  id: string
  name: string
  /** Office-jargon name shown while Stealth Mode terminology is active. */
  stealthName: string
  description: string
  kind: ItemKind
  rarity: Rarity
  value: number
  stats: ItemStats
}

import type { Item } from './item'

export interface Mob {
  id: string
  name: string
  stealthName: string
  hp: number
  maxHp: number
  attack: number
  defense: number
  loot: Item[]
}

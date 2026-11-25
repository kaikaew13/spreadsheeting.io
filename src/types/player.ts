import type { Item } from './item'

export type EquipmentSlot = 'weapon' | 'armor'

export interface Player {
  hp: number
  maxHp: number
  baseAttack: number
  baseDefense: number
  /** Run bag ("Storage Rows"); lost on death, moved to stash on Export. */
  bag: Item[]
  bagCapacity: number
  stash: Item[]
  equipment: Partial<Record<EquipmentSlot, Item>>
  credits: number
}

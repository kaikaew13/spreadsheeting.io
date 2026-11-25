import type { Item } from './item'
import type { Mob } from './mob'

export interface CellPosition {
  row: number
  col: number
}

export type CellContent =
  | { type: 'empty' }
  | { type: 'wall' }
  | { type: 'mob'; mob: Mob }
  | { type: 'loot'; item: Item }
  | { type: 'stairs' }
  | { type: 'extract' }

export interface FloorCell {
  position: CellPosition
  content: CellContent
  revealed: boolean
}

export interface Floor {
  depth: number
  seed: number
  rows: number
  cols: number
  cells: FloorCell[][]
  playerPosition: CellPosition
  /** Multiplier applied to loot rarity/value; grows with depth. */
  lootMultiplier: number
}

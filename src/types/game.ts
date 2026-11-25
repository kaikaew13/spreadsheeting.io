import type { Floor } from './floor'
import type { Player } from './player'

export type SheetId = 'discovery' | 'inventory' | 'vendor'

export type RunStatus = 'idle' | 'active' | 'extracted' | 'dead'

export interface GameState {
  player: Player
  floor: Floor | null
  runStatus: RunStatus
  activeSheet: SheetId
  turn: number
  log: string[]
  panicMode: boolean
}

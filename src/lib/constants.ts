import type { SheetId } from '../types'

export const SHEET_TABS: ReadonlyArray<{ id: SheetId; label: string }> = [
  { id: 'discovery', label: 'Sheet1: Discovery_Phase' },
  { id: 'inventory', label: 'Sheet2: Inventory_Audit' },
  { id: 'vendor', label: 'Sheet3: Vendor_Pricing' },
]

export const STORAGE_KEY = 'spreadsheeting.io/save'

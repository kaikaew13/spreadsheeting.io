import { useState } from 'react'
import { Grid } from './components/Grid'
import { GRID_COLS, GRID_ROWS, SHEET_TABS } from './lib/constants'
import type { CellPosition } from './types'

function App() {
  const [selected, setSelected] = useState<CellPosition>({ row: 0, col: 0 })

  return (
    <div className="flex h-full flex-col bg-white text-sm text-gray-800">
      <header className="border-b border-sheet-grid bg-sheet-header px-4 py-2">
        <h1 className="font-medium">Q4 Budget Projections</h1>
      </header>
      <main className="min-h-0 flex-1">
        <Grid
          rows={GRID_ROWS}
          cols={GRID_COLS}
          selected={selected}
          onSelect={setSelected}
        />
      </main>
      <nav className="flex gap-1 border-t border-sheet-grid bg-sheet-header px-2 py-1">
        {SHEET_TABS.map((tab) => (
          <span key={tab.id} className="rounded-t px-3 py-1 text-gray-600">
            {tab.label}
          </span>
        ))}
      </nav>
    </div>
  )
}

export default App

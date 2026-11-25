import { SHEET_TABS } from './lib/constants'

function App() {
  return (
    <div className="flex h-full flex-col bg-white text-sm text-gray-800">
      <header className="border-b border-sheet-grid bg-sheet-header px-4 py-2">
        <h1 className="font-medium">Q4 Budget Projections</h1>
      </header>
      <main className="flex flex-1 items-center justify-center text-gray-400">
        Grid coming in DEV-02
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

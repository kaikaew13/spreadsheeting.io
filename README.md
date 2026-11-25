# spreadsheeting.io

A browser-based extraction dungeon crawler disguised as a corporate spreadsheet. See [spreadsheeting-game-concept.md](./spreadsheeting-game-concept.md) for the design brief and development roadmap.

## Stack

React + TypeScript (Vite), Tailwind CSS v4, oxlint.

## Scripts

| Command | Description |
| --------- | ------------- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Lint with oxlint |
| `npm run preview` | Preview the production build |

## Structure

```
src/
  components/   Shared spreadsheet UI (grid, formula bar, tabs)
  features/     Game systems: dungeon, combat, loot, inventory, vendor, stealth
  state/        Game state store
  lib/          Constants and helpers
  types/        Domain types (Player, Item, Mob, Floor, GameState)
```

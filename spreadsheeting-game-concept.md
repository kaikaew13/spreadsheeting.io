# spreadsheeting.io — Game Concept & Design Brief

> **Core Vision & Hook:** A browser-based, text-driven extraction (procedurally generated) dungeon crawler disguised as a corporate spreadsheet—allowing office workers to battle monsters, gather loot, and extract items to a safe stash while appearing to analyze quarterly reports.

---

## 1. Core Extraction Gameplay Loop

* **Dungeon Floor Progression:** Players descend into deeper floors to fight mobs and gather increasingly valuable loot.
* **Risk vs. Reward:** Deeper floors increase loot rarity multipliers while straining limited HP and bag space ("Storage Rows").
* **Extraction Stakes:** Successfully triggering **Export / Extract** safely transfers collected items into the player's permanent stash; hitting 0 HP inside the dungeon wipes all unextracted loot from that run.

---

## 2. Spreadsheet UI & Office Stealth Mechanics

* **Grid & Formula Bar:** Numbered rows and lettered columns styled after Excel/Google Sheets, with a top `fx` formula bar displaying combat logs and item descriptions when cells are selected.
* **Worksheet Tabs:** Bottom sheet tabs replace traditional RPG navigation menus:
  * `Sheet1: Discoverery_Phase` — Active dungeon exploration and combat grid.
  * `Sheet2: Inventory_Audit` — Safe area stash, extracted loot, and equipment management.
  * `Sheet3: Vendor_Pricing` — Shop for upgrades, gear, and consumables.
* **Corporate Camouflage ("Stealth Mode"):** Translates some classic RPG terminologies into innocent office jargon, eg. **Extract** $\rightarrow$ *Export*
* **Panic Button (`Esc`):** Single-key hotkey that instantly switches the view to a static, realistic-looking financial spreadsheet or budget chart, paired with a neutral browser tab title (e.g., `"Q4 Budget Projections - Google Sheets"`).

---

## 3. Recommended Technical Architecture

* **Frontend:** React TS + Tailwind CSS (ideal for rendering crisp data grids and synchronized cell state without heavy game engine overhead).
* **Persistence:** Browser `localStorage` to auto-save runs after every turn so players never lose progress if they quickly close or switch tabs.

---

## 4. Development Roadmap

| Step | Label | Scope | Depends On |
| ------ | ------- | ------- | ------------ |
| **DEV-01** | `SETUP` — Project Scaffolding | Initialize React TS + Tailwind CSS project, linting, folder structure, base types (Player, Item, Mob, Floor). | — |
| **DEV-02** | `UI-GRID` — Spreadsheet Grid Shell | Numbered rows, lettered columns, cell selection, Excel/Google Sheets styling. | DEV-01 |
| **DEV-03** | `UI-FXBAR` — Formula Bar | Top `fx` bar showing selected cell contents, item descriptions, and combat log lines. | DEV-02 |
| **DEV-04** | `UI-TABS` — Worksheet Tab Navigation | Bottom tabs: `Sheet1: Discovery_Phase`, `Sheet2: Inventory_Audit`, `Sheet3: Vendor_Pricing`. | DEV-02 |
| **DEV-05** | `STATE` — Game State Management | Central store for player HP, current floor, run bag ("Storage Rows"), stash, currency; turn-based state updates. | DEV-01 |
| **DEV-06** | `GEN-DUNGEON` — Procedural Floor Generation | Seeded generator for dungeon floors rendered as grid cells (rooms, mobs, loot, exits). | DEV-02, DEV-05 |
| **DEV-07** | `COMBAT` — Text-Driven Combat | Turn-based fights against mobs, damage/HP rules, combat output to the formula bar. | DEV-03, DEV-06 |
| **DEV-08** | `LOOT` — Loot & Rarity System | Item tables, rarity tiers, depth-based rarity multipliers, drops from mobs/cells. | DEV-06 |
| **DEV-09** | `BAG` — Storage Rows (Bag Capacity) | Limited run inventory, pickup/drop rules, capacity pressure. | DEV-05, DEV-08 |
| **DEV-10** | `PROGRESSION` — Floor Descent | Descend to deeper floors, scaling mob difficulty and loot value (risk vs. reward). | DEV-06, DEV-07, DEV-08 |
| **DEV-11** | `EXTRACT` — Export / Extract & Death Wipe | **Export** moves bag items to permanent stash; 0 HP wipes unextracted loot. | DEV-09, DEV-10 |
| **DEV-12** | `STASH` — Inventory_Audit Sheet | Stash view, extracted loot listing, equipment equip/unequip management. | DEV-04, DEV-11 |
| **DEV-13** | `SHOP` — Vendor_Pricing Sheet | Buy/sell upgrades, gear, and consumables using stash currency. | DEV-04, DEV-12 |
| **DEV-14** | `STEALTH-TERMS` — Corporate Camouflage | Terminology map translating RPG terms to office jargon (e.g., Extract → *Export*) applied across UI text. | DEV-03, DEV-04 |
| **DEV-15** | `PANIC` — Panic Button (`Esc`) | Instant switch to a static fake financial sheet/budget chart + neutral tab title (e.g., `"Q4 Budget Projections - Google Sheets"`); toggle back. | DEV-02 |
| **DEV-16** | `PERSIST` — localStorage Auto-Save | Save run + stash after every turn; restore on reload/tab return. | DEV-05, DEV-11 |
| **DEV-17** | `BALANCE` — Tuning & Playtesting | Balance HP, bag size, rarity multipliers, shop prices, floor difficulty curve. | DEV-10 – DEV-13 |
| **DEV-18** | `POLISH` — QA & Release | Cross-browser testing, accessibility/keyboard shortcuts, performance, deployment. | All |

### Milestones

* **M1 — Spreadsheet Shell:** DEV-01 → DEV-05
* **M2 — Playable Dungeon Run:** DEV-06 → DEV-11
* **M3 — Meta Loop (Stash & Shop):** DEV-12 → DEV-13
* **M4 — Office Stealth:** DEV-14 → DEV-15
* **M5 — Persistence & Launch:** DEV-16 → DEV-18

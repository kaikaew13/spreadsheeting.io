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

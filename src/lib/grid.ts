import type { CellPosition } from "../types";

/** 0 → "A", 25 → "Z", 26 → "AA", 27 → "AB", ... */
export const columnLabel = (index: number): string => {
  let label = "";
  let n = index + 1;
  while (n > 0) {
    const remainder = (n - 1) % 26;
    label = String.fromCharCode(65 + remainder) + label;
    n = Math.floor((n - 1) / 26);
  }
  return label;
};

/** { row: 2, col: 1 } → "B3" */
export const cellAddress = ({ row, col }: CellPosition): string => {
  return `${columnLabel(col)}${row + 1}`;
};

export const clampPosition = (
  { row, col }: CellPosition,
  rows: number,
  cols: number,
): CellPosition => {
  return {
    row: Math.min(Math.max(row, 0), rows - 1),
    col: Math.min(Math.max(col, 0), cols - 1),
  };
};

export const samePosition = (a: CellPosition, b: CellPosition): boolean => {
  return a.row === b.row && a.col === b.col;
};

import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import { COLUMN_WIDTH, ROW_HEADER_WIDTH, ROW_HEIGHT } from "../lib/constants";
import { cellAddress, clampPosition, columnLabel } from "../lib/grid";
import type { CellPosition } from "../types";

interface GridProps {
  rows: number;
  cols: number;
  selected: CellPosition;
  onSelect: (position: CellPosition) => void;
  renderCell?: (position: CellPosition) => ReactNode;
}

const cellId = (position: CellPosition) => `cell-${cellAddress(position)}`;

const nextPosition = (
  event: KeyboardEvent,
  { row, col }: CellPosition,
  rows: number,
  cols: number,
): CellPosition | null => {
  const jump = event.metaKey || event.ctrlKey;
  switch (event.key) {
    case "ArrowUp":
      return { row: jump ? 0 : row - 1, col };
    case "ArrowDown":
      return { row: jump ? rows - 1 : row + 1, col };
    case "ArrowLeft":
      return { row, col: jump ? 0 : col - 1 };
    case "ArrowRight":
      return { row, col: jump ? cols - 1 : col + 1 };
    case "Tab":
      return { row, col: event.shiftKey ? col - 1 : col + 1 };
    case "Enter":
      return { row: event.shiftKey ? row - 1 : row + 1, col };
    case "Home":
      return jump ? { row: 0, col: 0 } : { row, col: 0 };
    case "End":
      return jump ? { row: rows - 1, col: cols - 1 } : { row, col: cols - 1 };
    default:
      return null;
  }
};

export const Grid = ({
  rows,
  cols,
  selected,
  onSelect,
  renderCell,
}: GridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  useEffect(() => {
    document
      .getElementById(cellId(selected))
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [selected]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const next = nextPosition(event, selected, rows, cols);
    if (!next) return;
    event.preventDefault();
    onSelect(clampPosition(next, rows, cols));
  };

  const rowIndexes = Array.from({ length: rows }, (_, i) => i);
  const colIndexes = Array.from({ length: cols }, (_, i) => i);

  const headerBase =
    "flex items-center justify-center border-r border-b border-sheet-grid text-xs select-none";
  const headerState = (active: boolean) =>
    active
      ? "bg-sheet-header-active font-semibold text-gray-900"
      : "bg-sheet-header text-gray-500";

  return (
    <div
      ref={containerRef}
      role="grid"
      aria-rowcount={rows}
      aria-colcount={cols}
      aria-activedescendant={cellId(selected)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative h-full overflow-auto bg-white outline-none"
    >
      <div
        className="grid w-max"
        style={{
          gridTemplateColumns: `${ROW_HEADER_WIDTH}px repeat(${cols}, ${COLUMN_WIDTH}px)`,
          gridAutoRows: `${ROW_HEIGHT}px`,
        }}
      >
        <div role="row" className="contents">
          <div
            className={`${headerBase} sticky top-0 left-0 z-30 bg-sheet-header`}
          />
          {colIndexes.map((col) => (
            <div
              key={col}
              role="columnheader"
              className={`${headerBase} sticky top-0 z-20 ${headerState(col === selected.col)}`}
            >
              {columnLabel(col)}
            </div>
          ))}
        </div>

        {rowIndexes.map((row) => (
          <div key={row} role="row" className="contents">
            <div
              role="rowheader"
              className={`${headerBase} sticky left-0 z-10 ${headerState(row === selected.row)}`}
            >
              {row + 1}
            </div>
            {colIndexes.map((col) => {
              const position = { row, col };
              const isSelected = row === selected.row && col === selected.col;
              return (
                <div
                  key={col}
                  id={cellId(position)}
                  role="gridcell"
                  aria-selected={isSelected}
                  onMouseDown={() => {
                    onSelect(position);
                    containerRef.current?.focus();
                  }}
                  style={{
                    scrollMarginTop: ROW_HEIGHT,
                    scrollMarginLeft: ROW_HEADER_WIDTH,
                  }}
                  className={`truncate border-r border-b border-sheet-grid px-1 text-[13px] leading-5 ${
                    isSelected
                      ? "relative z-1 outline-2 -outline-offset-1 outline-sheet-select"
                      : ""
                  }`}
                >
                  {renderCell?.(position)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

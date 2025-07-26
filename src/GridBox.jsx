import {useRef} from "react";
import styles from "./GridBox.module.css";

export default function GridBox({
  size = {x: 1, y: 1},
  position = {x: 1, y: 1},
  backgroundColour,
  border,
  children,
}) {
  const {x: colStart, y: rowStart} = position;
  const {x: colSpan, y: rowSpan} = size;

  const gridStyle = {
    gridRow: `${rowStart} / span ${rowSpan}`,
    gridColumn: `${colStart} / span ${colSpan}`,

    backgroundColor: backgroundColour ? backgroundColour : undefined,
    border: border ? border : undefined,
  };

  return (
    <div className={styles.gridBox} style={gridStyle}>
      {children}
    </div>
  );
}

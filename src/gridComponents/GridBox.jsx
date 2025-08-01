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

  //access the boxes position
  const ref = useRef();
  //move the box down 5-10 pixels on scroll
  function scrollDrag(ref) {}
  //move back to original position after scroll

  return (
    <div
      className={styles.gridBox}
      style={gridStyle}
      ref={ref}
      onScroll={scrollDrag()}
    >
      {children}
    </div>
  );
}

import styles from "./GridButton.module.css";

export default function GridButton({
  size = {x: 1, y: 1},
  position = {x: 1, y: 1},
  backgroundColour,
  border,
  text,
  fontSize,
}) {
  const {x: colStart, y: rowStart} = position;
  const {x: colSpan, y: rowSpan} = size;

  const gridStyle = {
    gridRow: `${rowStart} / span ${rowSpan}`,
    gridColumn: `${colStart} / span ${colSpan}`,

    backgroundColor: backgroundColour ? backgroundColour : undefined,
    border: border ? border : undefined,
    fontSize: fontSize ? fontSize : undefined,
  };

  return (
    <button className={styles.gridButton} style={gridStyle}>
      {text}
    </button>
  );
}

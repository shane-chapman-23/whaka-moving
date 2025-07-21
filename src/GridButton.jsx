import styles from "./GridButton.module.css";

export default function GridButton({
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  backgroundColour,
  border,
  text,
}) {
  const gridStyle = {
    gridRow: `${rowStart} / ${rowEnd}`,
    gridColumn: `${colStart} / ${colEnd}`,

    backgroundColor: backgroundColour ? backgroundColour : undefined,
    border: border ? border : undefined,
  };
  return (
    <button className={styles.gridButton} style={gridStyle}>
      {text}
    </button>
  );
}

import styles from "./GridBox.module.css";

export default function GridBox({
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  backgroundColour,
  border,
  children,
}) {
  const gridStyle = {
    gridRow: `${rowStart} / ${rowEnd}`,
    gridColumn: `${colStart} / ${colEnd}`,

    backgroundColor: backgroundColour ? backgroundColour : undefined,
    border: border ? border : undefined,
  };
  return (
    <div className={styles.gridBox} style={gridStyle}>
      {children}
    </div>
  );
}

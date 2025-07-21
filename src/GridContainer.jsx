import GridBox from "./GridBox";
import GridButton from "./GridButton";
import Heading from "./gridComponents/Heading";

import styles from "./GridContainer.module.css";

export default function GridContainer() {
  return (
    <div className={styles.gridContainer}>
      {/* ====================LANDING PAGE========================= */}
      <GridBox rowStart={4} rowEnd={7} colStart={2} colEnd={12} border="none">
        <Heading />
      </GridBox>
      <GridBox rowStart={7} rowEnd={10} colStart={2} colEnd={8}></GridBox>
      <GridBox rowStart={6} rowEnd={9} colStart={10} colEnd={13}></GridBox>
      <GridButton
        rowStart={9}
        rowEnd={10}
        colStart={10}
        colEnd={13}
        backgroundColour="#dc3c22"
        border="none"
        text="Let's Move"
      ></GridButton>
      {/* ====================LANDING PAGE========================= */}
    </div>
  );
}

import GridBox from "./GridBox";
import GridButton from "./GridButton";
import Heading from "./gridComponents/landing/components/Heading";
import LogoImage from "./gridComponents/landing/components/LogoImage";
import Landing from "./gridComponents/landing/Landing";

import styles from "./GridContainer.module.css";

export default function GridContainer() {
  return (
    <div className={styles.gridContainer}>
      <Landing />
    </div>
  );
}

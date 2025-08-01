import Landing from "./components/landing/Landing";
import OurServices from "./components/ourServices/OurServices";

import styles from "./GridContainer.module.css";

export default function GridContainer() {
  return (
    <div className={styles.gridContainer}>
      <Landing />
      <OurServices />
    </div>
  );
}

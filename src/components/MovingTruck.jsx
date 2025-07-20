import NavBar from "./NavBar";

import styles from "./MovingTruck.module.css";

export default function MovingTruck() {
  return (
    <div className={styles.container}>
      <div className={styles.truckBox}>
        <NavBar />
      </div>
    </div>
  );
}

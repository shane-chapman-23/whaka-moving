import NavBar from "./NavBar";

import styles from "./MovingTruck.module.css";
//Change the name to Fworms!!!!
export default function MovingTruck() {
  return (
    <div className={styles.container}>
      <div className={styles.truckBox}>
        <NavBar />
      </div>
    </div>
  );
}

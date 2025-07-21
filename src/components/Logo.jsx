import React from "react";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src="images/logo-black.svg" className={styles.logoImage}></img>
      <h2 className={styles.logoName}>
        Whakatane <br />
        Moving
      </h2>
    </div>
  );
}

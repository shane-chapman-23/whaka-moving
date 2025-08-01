import React from "react";

import styles from "./NavLogo.module.css";

export default function NavLogo() {
  return (
    <div className={styles.logoContainer}>
      <img src="images/logo-black.svg" className={styles.logoImage}></img>
      <h2 className={styles.logoName}>
        Whakatane <br />
        Moving
      </h2>
    </div>
  );
}

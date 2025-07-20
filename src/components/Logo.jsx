import React from "react";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src="images/logo-black.svg"></img>
      <h2>
        Whakatane <br />
        Moving
      </h2>
    </div>
  );
}

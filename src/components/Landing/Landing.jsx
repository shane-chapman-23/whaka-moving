import React from "react";

import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Whakatane Moving.</h1>
        <h2>
          Moving the Eastern Bay of Plenty
          <br />
          and beyond for over a decade.
        </h2>
      </div>
    </div>
  );
}

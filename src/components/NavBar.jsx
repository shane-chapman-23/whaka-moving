import React from "react";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navMenu}>
        <a href="/home">Home</a>
        <a href="/home">Our Services</a>
        <a href="/home">About Us</a>
        <a href="/home">What happens next</a>
        <a href="/home">
          <span className={styles.contactLink}>Have a question?</span>
        </a>
      </nav>
    </div>
  );
}

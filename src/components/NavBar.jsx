import {useState} from "react";

import styles from "./NavBar.module.css";
import NavLogo from "./NavLogo";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("Home");

  //Highlight active link

  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.navLogoContainer}>
          <NavLogo />
        </div>
        <div className={styles.navMenuContainer}>
          <nav className={styles.navMenu}>
            <a href="/home">Home</a>
            <a href="/home">Our Services</a>
            <a href="/home">About Us</a>
            <a href="/home">About Us</a>
          </nav>
        </div>
        <div className={styles.navCTA}></div>
      </div>
      <div className={styles.movingTruck}>
        <div className={styles.tailgate}></div>
      </div>
    </>
  );
}

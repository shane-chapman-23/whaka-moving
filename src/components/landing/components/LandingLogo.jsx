import styles from "./LandingLogo.module.css";

export default function LandingLogo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.landingLogo} src="/images/logo-salmon.svg"></img>
    </div>
  );
}

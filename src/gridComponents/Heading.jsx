import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <div>
      <h1 className={styles.header}>Whakatane Moving.</h1>
      <h2 className={styles.tagline}>
        Moving the{" "}
        <span className={styles.boldText}>Eastern Bay of Plenty</span>
        <br />
        and beyond for <span className={styles.boldText}>over a decade.</span>
      </h2>
    </div>
  );
}

import styles from "./Tagline.module.css";

export default function Tagline() {
  return (
    <div className={styles.taglineContainer}>
      <h2 className={styles.tagline}>
        Moving the{" "}
        <span className={styles.boldText}>Eastern Bay of Plenty</span>
        <br />
        and <span className={styles.boldText}>beyond</span> for{" "}
        <span className={styles.boldText}>over a decade.</span>
      </h2>
    </div>
  );
}

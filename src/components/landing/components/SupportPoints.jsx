import {TiTick} from "react-icons/ti";

import styles from "./SupportPoints.module.css";

export default function SupportPoints() {
  return (
    <div className={styles.supportPointsContainer}>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>Simple and fast booking</p>
      </div>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>WINZ Approved</p>
      </div>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>Extra protection for bigger items and walls</p>
      </div>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>Affordable pricing with no hidden fees</p>
      </div>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>Local, friendly and reliable movers you can trust</p>
      </div>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>We can move you as far as Stuart Island</p>
      </div>
      <div className={styles.tickTextContainer}>
        <TiTick color="#dc3c22" size="2em" />
        <p>We even provide the boxes!</p>
      </div>
    </div>
  );
}

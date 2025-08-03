import {TiTick} from "react-icons/ti";

import styles from "./SupportPoints.module.css";

export default function SupportPoints() {
  const supportPoints = [
    "Simple and fast booking",
    "WINZ Approved",
    "Extra protection for bigger items and walls",
    "Affordable pricing with no hidden fees",
    "Local, friendly and reliable movers you can trust",
    "We'll move you anywhere in the country",
    "We even provide the boxes!",
  ];

  return (
    <div className={styles.supportPointsContainer}>
      {supportPoints.map((point) => {
        return (
          <div className={styles.tickTextContainer}>
            <TiTick color="#dc3c22" size="1.7em" />
            <p>{point}</p>
          </div>
        );
      })}
    </div>
  );
}

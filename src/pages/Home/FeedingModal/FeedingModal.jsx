// src/components/FeedingModal/FeedingModal.jsx

import styles from "./FeedingModal.module.scss";

export default function FeedingModal({ onNext }) {
  return (
    <div className={`${styles.modalWrapper} ${styles.bounceLoop}`}>
      <img className={styles.fishImg} src="/src/assets/fish.png" />
      <p className={styles.text}>어이 홍길동! 밥 줘!</p>
      <button className={styles.btn} onClick={onNext}>
        알겠어...
      </button>
    </div>
  );
}

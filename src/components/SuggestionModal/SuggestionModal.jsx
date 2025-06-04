// src/components/SuggestionModal/SuggestionModal.jsx

import styles from "./SuggestionModal.module.scss";

export default function SuggestionModal({ onClose }) {
  return (
    <div className={`${styles.modalWrapper} ${styles.bounceLoop}`}>
      <img className={styles.productImg} src="/src/assets/히카리사료.jpg" />
      <p className={styles.ad}>광고</p>
      <p className={styles.text}>나 이거 먹고 싶어</p>
      <a
        className={styles.link}
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        상품 보러가기
      </a>
      <button className={styles.btn} onClick={onClose}>
        나 거지야
      </button>
    </div>
  );
}

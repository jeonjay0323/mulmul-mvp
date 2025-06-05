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
        href="https://www.coupang.com/vp/products/8310267345?itemId=24560612037&vendorItemId=91572851678&q=%ED%94%84%EB%A1%9C%EB%8B%A5%EC%95%8C%EA%B2%8C%EC%99%80%ED%8D%BC&searchId=0f56a5ab185727&sourceType=search&itemsCount=36&searchRank=7&rank=7"
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

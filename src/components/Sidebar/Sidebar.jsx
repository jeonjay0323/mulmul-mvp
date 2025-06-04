// 수조명 + 입력 폼
// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

export default function Sidebar({ onGenerateCalendar }) {
  const [tankName, setTankName] = useState("");
  const [tankSize, setTankSize] = useState("");
  const [fishSize, setFishSize] = useState("");
  const [substrate, setSubstrate] = useState("");
  const [hasPlants, setHasPlants] = useState(null);
  const [hasFilter, setHasFilter] = useState(null);

  return (
    <div className={styles.sidebar}>
      <h2>내 수조 설정</h2>

      <label>
        수조 크기 <p>(필수)</p>
      </label>
      <select value={tankSize} onChange={(e) => setTankSize(e.target.value)}>
        <option value="">-선택-</option>
        <option value="소형">소형 (30cm 이하)</option>
        <option value="중형">중형 (30~60cm)</option>
        <option value="대형">대형 (60cm 이상)</option>
      </select>

      <label>
        생물 종류 <p>(필수)</p>
      </label>
      <select value={fishSize} onChange={(e) => setFishSize(e.target.value)}>
        <option value="">-선택-</option>
        <option value="소형종">소형종 (~3cm)</option>
        <option value="중형종">중형종 (4cm~8cm)</option>
      </select>

      <label>
        수초 유무 <p>(필수)</p>
      </label>
      <div className={styles.toggleGroup}>
        <button
          type="button"
          className={hasPlants === true ? styles.active : ""}
          onClick={() => setHasPlants(true)}
        >
          있어요
        </button>
        <button
          type="button"
          className={hasPlants === false ? styles.active : ""}
          onClick={() => setHasPlants(false)}
        >
          없어요
        </button>
      </div>

      <label>
        여과기 유무 <p>(필수)</p>
      </label>
      <div className={styles.toggleGroup}>
        <button
          type="button"
          className={hasFilter === true ? styles.active : ""}
          onClick={() => setHasFilter(true)}
        >
          있어요
        </button>
        <button
          type="button"
          className={hasFilter === false ? styles.active : ""}
          onClick={() => setHasFilter(false)}
        >
          없어요
        </button>
      </div>

      <label>
        바닥재 <p>(필수)</p>
      </label>
      <select value={substrate} onChange={(e) => setSubstrate(e.target.value)}>
        <option value="">-선택-</option>
        <option value="일반 소일">일반 소일</option>
        <option value="영양 소일">영양 소일</option>
        <option value="샌드">샌드</option>
        <option value="탱크항">탱크항</option>
      </select>

      <label>
        수조 이름 <p>(필수)</p>
      </label>
      <input
        type="text"
        placeholder="예시) 우리집 1호 수조"
        value={tankName}
        onChange={(e) => setTankName(e.target.value)}
      />

      <button
        className={styles.generateBtn}
        onClick={() => onGenerateCalendar(tankName)}
        disabled={!tankName.trim()}
      >
        관리 캘린더 자동 생성
      </button>
    </div>
  );
}

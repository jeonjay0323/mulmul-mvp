// 수조명 + 입력 폼
// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

export default function Sidebar({ onGenerateCalendar }) {
  const [tankName, setTankName] = useState("");
  const [tankSize, setTankSize] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [speciesInput, setSpeciesInput] = useState("");
  const [substrate, setSubstrate] = useState("");
  const [hasPlants, setHasPlants] = useState(null);
  const [hasFilter, setHasFilter] = useState(null);

  const handleAddSpecies = () => {
    if (speciesInput && !selectedSpecies.includes(speciesInput)) {
      setSelectedSpecies([...selectedSpecies, speciesInput]);
      setSpeciesInput("");
    }
  };

  return (
    <div className={styles.sidebar}>
      <h2>내 수조 설정</h2>

      <label>
        수조 이름 <p>(필수)</p>
      </label>
      <input
        type="text"
        placeholder="예시) 우리집 1호 수조"
        value={tankName}
        onChange={(e) => setTankName(e.target.value)}
      />

      <label>
        수조 크기 <p>(필수)</p>
      </label>
      <select value={tankSize} onChange={(e) => setTankSize(e.target.value)}>
        <option value="">선택하세요</option>
        <option value="소형">소형 (30cm 이하)</option>
        <option value="중형">중형 (30~60cm)</option>
        <option value="대형">대형 (60cm 이상)</option>
      </select>

      <label>
        생물 종류 <p>(필수)</p>
      </label>
      <div className={styles.speciesInputWrapper}>
        <input
          type="text"
          placeholder="예시) 구피"
          value={speciesInput}
          onChange={(e) => setSpeciesInput(e.target.value)}
        />
        <button className={styles.addBtn} onClick={handleAddSpecies}>
          +
        </button>
      </div>
      <div className={styles.speciesBadges}>
        {selectedSpecies.map((item, idx) => (
          <span key={idx} className={styles.badge}>
            {item}
          </span>
        ))}
      </div>

      <label>
        수초 유무 <p>(필수)</p>
      </label>
      <div className={styles.toggleGroup}>
        <button
          type="button"
          className={hasPlants === true ? styles.active : ""}
          onClick={() => setHasPlants(true)}
        >
          있음
        </button>
        <button
          type="button"
          className={hasPlants === false ? styles.active : ""}
          onClick={() => setHasPlants(false)}
        >
          없음
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
          있음
        </button>
        <button
          type="button"
          className={hasFilter === false ? styles.active : ""}
          onClick={() => setHasFilter(false)}
        >
          없음
        </button>
      </div>

      <label>
        바닥재 <p>(필수)</p>
      </label>
      <select value={substrate} onChange={(e) => setSubstrate(e.target.value)}>
        <option value="">선택하세요</option>
        <option value="모래">모래</option>
        <option value="소일">소일</option>
        <option value="자갈">자갈</option>
      </select>

      <button
        className={styles.generateBtn}
        onClick={() => onGenerateCalendar(tankName)}
        disabled={!tankName.trim()}
      >
        관리 캘린더 AI 생성
      </button>
    </div>
  );
}

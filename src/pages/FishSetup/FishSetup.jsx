// src/pages/FishSetup/FishSetup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FishSetup.module.scss";

export default function FishSetup() {
  const [nickname, setNickname] = useState("");
  const [tone, setTone] = useState("반말");
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(""); // ✅ 추가
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // ✅ 파일 이름 저장
      setImage(URL.createObjectURL(file)); // 이미지 미리보기
    }
  };

  const handleSave = () => {
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("tone", tone);
    localStorage.setItem("fishImage", image);
    navigate("/calendar");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPane}>
        <img src="/src/assets/logo.png" className={styles.image} />
        <h2>
          물생활이 손에 잡힌다!
          <br />
          감성 물생활 서비스 물물
        </h2>
        <p>
          물생활은 매일매일 해야할 일이 많죠.
          <br />그 일상 속 어려움이 있지 않으셨나요?
          <br />
          급이를 까먹거나 환수를 까먹거나.
          <br />
          여러분의 고충을 물물이 덜어드릴게요!
        </p>
      </div>
      <div className={styles.rightPane}>
        <h2>내 물고기 설정</h2>

        <label>물고기 사진</label>
        <div className={styles.setWrapper}>
          <div className={styles.uploadWrapper}>
            {/* 파일명 표시 */}
            {fileName && <p className={styles.fileName}>{fileName}</p>}
          </div>
          <label className={styles.uploadButton}>
            이미지 업로드
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        </div>

        <label>물고기 말투</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="선택">-선택-</option>
          <option value="반항아">반항아</option>
          <option value="귀염둥이">귀염둥이</option>
          <option value="우등생">우등생</option>
        </select>

        <label>
          내 이름<p>(물고기가 불러줬으면 하는 이름으로 정해주세요)</p>
        </label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="예시) 홍길동"
        />

        <button className={styles.saveBtn} onClick={handleSave}>
          관리 캘린더 만들기
        </button>
      </div>
    </div>
  );
}

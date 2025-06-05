// 상단 로고 + 설명
// src/components/Header.jsx
import React from "react";
import "./Header.css"; // 또는 .scss

export default function Header() {
  return (
    <header className="header">
      <h1>물물</h1>
      <h3>물생활이 손에 잡힌다!</h3>
      <label>
        물생활은 고관여 취미입니다. 매일매일 해야할 일이 많죠. 그 일상 속
        어려움이 있지 않으셨나요? 급이를 까먹거나 환수를 까먹거나. 여러분의
        고충을 물물이 덜어드릴게요!
      </label>
    </header>
  );
}

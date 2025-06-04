// 캘린더 출력
// src/components/CalendarView/CalendarView.jsx
import React from "react";
import styles from "./CalendarView.module.scss";

export default function CalendarView({ tankName, calendarData }) {
  return (
    <div className={styles.wrapper}>
      {/* 캘린더 데이터가 있을 때만 수조명 표시 */}
      {calendarData && calendarData.length > 0 ? (
        <>
          <h2 className={styles.tankTitle}>{tankName}</h2>
          <div className={styles.calendar}>
            {calendarData.map((item, index) => (
              <div key={index} className={styles.dayCard}>
                <div className={styles.day}>{item.day}</div>
                <div className={styles.task}>{item.task}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.placeholder}>AI 캘린더를 만들어보세요!</div>
      )}
    </div>
  );
}

import { useState, useMemo } from "react";
import styles from "./CalendarView.module.scss";

export default function CalendarView({ calendarTasks, tankName }) {
  const isVisible = !!calendarTasks;

  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  const safeTasks = useMemo(() => calendarTasks ?? {}, [calendarTasks]);

  const calendarGrid = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    const startDay = new Date(firstDay);
    startDay.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7)); // 월요일 시작

    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDay);
      date.setDate(startDay.getDate() + i);
      const iso = date.toISOString().split("T")[0];

      const isToday = iso === new Date().toISOString().split("T")[0];

      days.push({
        date: iso,
        isCurrentMonth: date.getMonth() + 1 === currentMonth,
        isToday,
        tasks: safeTasks[iso] || [],
      });
    }
    return days;
  }, [currentYear, currentMonth, safeTasks]);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 1 ? 12 : prev - 1));
    if (currentMonth === 1) setCurrentYear((y) => y - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 12 ? 1 : prev + 1));
    if (currentMonth === 12) setCurrentYear((y) => y + 1);
  };

  if (!isVisible) {
    return (
      <div className={styles.placeholder}>
        <h3>수조 관리 캘린더를 자동 생성해보세요!</h3>
      </div>
    );
  }

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarUnit}>
        <h3 className={styles.tankTitle}>{tankName}</h3>
        <div className={styles.calendarHeader}>
          <button className={styles.beforeMonth} onClick={handlePrevMonth}>
            {"<"}
          </button>
          <h3>
            {currentYear}년 {currentMonth}월
          </h3>
          <button className={styles.nextMonth} onClick={handleNextMonth}>
            {">"}
          </button>
        </div>
      </div>

      <div className={styles.headerRow}>
        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
          <div key={day} className={styles.dayHeader}>
            {day}
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {calendarGrid.map((cell, i) => (
          <div
            key={i}
            className={`${styles.cell} ${
              !cell.isCurrentMonth ? styles.dimmed : ""
            } ${cell.isToday ? styles.today : ""}`}
          >
            <div className={styles.date}>{new Date(cell.date).getDate()}</div>
            <div className={styles.tasks}>
              {cell.tasks.slice(0, 2).map((task, idx) => (
                <div
                  key={idx}
                  className={`${styles.taskTag} ${styles[task.color]}`}
                >
                  {task.label}
                </div>
              ))}
              {cell.tasks.length > 2 && (
                <div className={styles.more}>+{cell.tasks.length - 2} more</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

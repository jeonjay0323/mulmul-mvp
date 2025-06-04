// src/components/CalendarView/CalendarView.jsx
import { useState, useEffect } from "react";
import styles from "./CalendarView.module.scss";

export default function CalendarView({ calendarTasks = {} }) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [calendarGrid, setCalendarGrid] = useState([]);

  useEffect(() => {
    const generateCalendar = (year, month) => {
      const firstDay = new Date(year, month - 1, 1);
      const startDay = new Date(firstDay);
      startDay.setDate(firstDay.getDate() - firstDay.getDay() + 1); // 월요일 시작

      const days = [];
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDay);
        date.setDate(startDay.getDate() + i);
        const iso = date.toISOString().split("T")[0];

        const isToday = iso === new Date().toISOString().split("T")[0];

        days.push({
          date: iso,
          isCurrentMonth: date.getMonth() + 1 === month,
          isToday: isToday,
          tasks: calendarTasks[iso] || [],
        });
      }
      return days;
    };

    setCalendarGrid(generateCalendar(currentYear, currentMonth));
  }, [currentYear, currentMonth, calendarTasks]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePrevMonth}>{"<"}</button>
        <h2>
          {currentYear}년 {currentMonth}월
        </h2>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>

      <div className={styles.headerRow}>
        {days.map((day) => (
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

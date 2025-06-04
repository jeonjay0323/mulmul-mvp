// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CalendarView from "./components/CalendarView/CalendarView";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [calendarTasks, setCalendarTasks] = useState({});

  const handleGenerateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-based
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const tasksByDate = {};

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const iso = date.toISOString().split("T")[0];

      // 매일 급이
      tasksByDate[iso] = [
        {
          label: "급이 3회",
          color: "blue",
        },
      ];

      // 2주마다 환수
      if ((i - 1) % 14 === 0) {
        tasksByDate[iso].push({
          label: "환수",
          color: "green",
        });
      }
    }

    setCalendarTasks(tasksByDate);
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar onGenerateCalendar={handleGenerateCalendar} />
        <CalendarView calendarTasks={calendarTasks} />
      </div>
      <Footer />
    </>
  );
}

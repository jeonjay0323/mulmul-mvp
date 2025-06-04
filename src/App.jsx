import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import CalendarView from "./components/CalendarView/CalendarView";
import "./index.css";

export default function App() {
  const [calendarTasks, setCalendarTasks] = useState(null); // 일정
  const [tankName, setTankName] = useState(""); // 수조명

  const handleGenerateCalendar = (tankName) => {
    const today = new Date();
    const tasks = {};
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const iso = date.toISOString().split("T")[0];
      tasks[iso] = [{ label: "급이 3회", color: "blue" }];
      if (i % 14 === 0) tasks[iso].push({ label: "환수", color: "green" });
    }

    setTankName(tankName);
    setCalendarTasks(tasks);
  };

  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar onGenerateCalendar={handleGenerateCalendar} />
        <CalendarView tankName={tankName} calendarTasks={calendarTasks} />
      </div>
      <Footer />
    </>
  );
}

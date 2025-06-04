import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import CalendarView from "./components/CalendarView/CalendarView";
import FeedingModal from "./components/FeedingModal/FeedingModal";
import SuggestionModal from "./components/SuggestionModal/SuggestionModal";
import "./index.css";

export default function App() {
  const [calendarTasks, setCalendarTasks] = useState(null);
  const [tankName, setTankName] = useState("");
  const [isFeedingOpen, setFeedingOpen] = useState(false);
  const [isSuggestionOpen, setSuggestionOpen] = useState(false);

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
    setFeedingOpen(true); // ✅ 첫 모달 오픈
  };

  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar onGenerateCalendar={handleGenerateCalendar} />
        <CalendarView tankName={tankName} calendarTasks={calendarTasks} />
      </div>
      <Footer />

      {isFeedingOpen && (
        <FeedingModal
          onNext={() => {
            setFeedingOpen(false);
            setSuggestionOpen(true);
          }}
        />
      )}

      {isSuggestionOpen && (
        <SuggestionModal onClose={() => setSuggestionOpen(false)} />
      )}
    </>
  );
}

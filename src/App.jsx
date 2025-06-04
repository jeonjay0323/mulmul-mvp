import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import CalendarView from "./components/CalendarView/CalendarView";
import "./index.css";

function App() {
  const [tankName, setTankName] = useState("");
  const [calendarData, setCalendarData] = useState([]);

  const handleGenerateCalendar = (newTankName) => {
    setTankName(newTankName);
    const dummyCalendar = [
      { day: "월", task: "물 갈기" },
      { day: "화", task: "사료 주기" },
      { day: "수", task: "여과기 점검" },
      { day: "목", task: "" },
      { day: "금", task: "조명 켜기" },
      { day: "토", task: "청소" },
      { day: "일", task: "" },
    ];
    setCalendarData(dummyCalendar);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar onGenerateCalendar={handleGenerateCalendar} />
        <div style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <CalendarView tankName={tankName} calendarData={calendarData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

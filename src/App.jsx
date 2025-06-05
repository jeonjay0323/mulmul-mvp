// import { useState } from "react";
import Header from "./pages/Home/Header/Header";
import Footer from "./pages/Home/Footer/Footer";
import Sidebar from "./pages/Home/Sidebar/Sidebar";
import CalendarView from "./pages/Home/CalendarView/CalendarView";
import FeedingModal from "./pages/Home/FeedingModal/FeedingModal";
import SuggestionModal from "./pages/Home/SuggestionModal/SuggestionModal";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FishSetup from "./pages/FishSetup/FishSetup.jsx";
import Home from "./pages/Home/Home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FishSetup />} />
        <Route path="/calendar" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

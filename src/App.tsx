import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Auth from "./pages/Landing";
import SentMagicLink from "./pages/SentMagicLink";
import Header from "./components/Header";
import Brew from "./pages/Brew";
import DashBoard from "./pages/DashBoard";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/sent" element={<SentMagicLink />} />
        <Route path="/brew" element={<Brew />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import SentMagicLink from "./pages/SentMagicLink";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Brew from "./pages/Brew";
import DashBoard from "./pages/DashBoard";
import Verify from "./pages/Verify";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/sent" element={<SentMagicLink />} />
          <Route path="/brew" element={<Brew />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

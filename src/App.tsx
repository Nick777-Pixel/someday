import React from "react";
import { NhostClient, NhostProvider } from "@nhost/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import nhost from "./utils/nhost";
import SentMagicLink from "./pages/Auth/SentMagicLink";
import Header from "./components/Header";
export default function App() {
  return (
    <NhostProvider nhost={nhost}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sent" element={<SentMagicLink />} />
        </Routes>
      </BrowserRouter>
    </NhostProvider>
  );
}

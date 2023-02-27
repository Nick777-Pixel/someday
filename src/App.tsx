import React from "react";
import { NhostClient, NhostProvider } from "@nhost/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import nhost from "./utils/nhost";
export default function App() {
  return (
    <NhostProvider nhost={nhost}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </NhostProvider>
  );
}

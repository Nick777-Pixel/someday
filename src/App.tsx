import React from "react";
import { NhostClient, NhostProvider } from "@nhost/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN as string,
  region: import.meta.env.VITE_NHOST_REGION as string,
});
export default function App() {
  return (
    <NhostProvider nhost={nhost}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </NhostProvider>
  );
}

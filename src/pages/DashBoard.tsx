import React, { useEffect, useState } from "react";
import History from "../components/History";
import { database } from "../utils/appwrite";
export default function DashBoard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    // const promise = database.listDocuments("messages");
  }, []);
  return (
    <div className="max-w-4xl p-5 font-quicksand mx-auto">
      <h1 className="font-bold text-2xl">My Message History</h1>
      <History />
    </div>
  );
}

import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import History from "../components/History";
import { useAuth } from "../contexts/AuthContext";
import { database } from "../utils/appwrite";
export default function DashBoard() {
  const [messages, setMessages] = useState([]);
  const { currentUser }: any = useAuth();
  useEffect(() => {
    const promise = database
      .listDocuments("640a097013200bf1a01d", "640a09a58752e10bd4b1", [
        Query.equal("from", currentUser.email),
      ])
      .then((response: any) => {
        setMessages(response.documents);
      });
  }, [currentUser]);
  return (
    <div className="max-w-4xl p-5 font-quicksand mx-auto">
      <h1 className="font-bold text-2xl">My Message History</h1>
      {messages.map((message: any) => {
        return <div key={message.$id}>{message.message}</div>;
      })}
    </div>
  );
}

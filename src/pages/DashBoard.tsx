import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useAuth } from "../contexts/AuthContext";
import { database } from "../utils/appwrite";
export default function DashBoard() {
  const [messages, setMessages] = useState([]);
  const { currentUser }: any = useAuth();
  console.log(currentUser);
  useEffect(() => {
    const promise = database
      .listDocuments("640a097013200bf1a01d", "640a09a58752e10bd4b1", [
        Query.equal("from", currentUser.email),
      ])
      .then((response: any) => {
        setMessages(response.documents);
      });
  }, []);
  return (
    <div className="max-w-4xl p-5 font-quicksand mx-auto flex flex-col space-y-5">
      <h1 className="font-bold text-2xl">My Message History</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>To</th>
              <th>Date</th>
              <th>Status</th>
              <th>Anon</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message: any) => {
              return (
                <tr>
                  <td>{message.to}</td>
                  <td>{moment(message.date).format("d - mm - yyyy")}</td>
                  <td>{message.delivered?"✅":"❌"}</td>
                  <td>{message.anonymous?"✅":"❌"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

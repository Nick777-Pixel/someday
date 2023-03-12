import React, { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { Databases, ID, Functions } from "appwrite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { database, functions } from "../utils/appwrite";

export default function Brew() {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    to: "",
    from: "nur08439@gmail.com",
    message: "",
    anonymous: false,
    notify: false,
    date: "",
    delivered: false,
  });
  const verifyDate = () => {
    const date = new Date(message.date);
    const today = new Date();
    //date should be atleast 1 month from now
    if (date.getMonth() - today.getMonth() < 1) {
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!message.to || !message.message || !message.date) {
      toast.error("⚠️ Please Fill All The Fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (!verifyDate()) {
      toast.error("📆 Date Should Be Atleast 1 Month From Now", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    console.log(message);
    const promise = await database.createDocument(
      "640a097013200bf1a01d",
      "640a09a58752e10bd4b1",
      ID.unique(),
      message
    );
    if (promise) {
      if (message.notify && !message.anonymous) {
        const promise = await functions.createExecution("640a10fd5cb440c2773b");
      }

      toast("🦄 Message Scheduled!!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/dashboard");
    }
  };
  return (
    <div className="bg-base-200 h-[90vh]">
      <ToastContainer />
      <div className="font-quicksand max-w-4xl mx-auto p-4">
        <TextInput
          type="email"
          label="Reciever's Email Address"
          placeholder="Example : hide@seek.com"
          onChange={(e) => setMessage({ ...message, to: e.target.value })}
          full
        />
        <TextInput
          type="date"
          label="Select Message Delivery Date (Atleast 1 month from now)"
          placeholder="Example : mail@hosenur.dev"
          onChange={(e) => setMessage({ ...message, date: e.target.value })}
          full
        />
        <label className="label">Message</label>

        <textarea
          className="textarea textarea-primary w-full h-40 my-2"
          placeholder="Example : I love you with my soul, in case my mind forgets and my heart stops beating."
          onChange={(e) => setMessage({ ...message, message: e.target.value })}
        ></textarea>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Send Anonymous Message</span>
            <input
              type="checkbox"
              className="toggle"
              checked={message.anonymous}
              onChange={(e) =>
                setMessage({ ...message, anonymous: !message.anonymous })
              }
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Notify Reciever Now</span>
            <input
              type="checkbox"
              className="toggle"
              checked={message.notify}
              onChange={(e) =>
                setMessage({ ...message, notify: !message.notify })
              }
            />
          </label>
        </div>
        <Button text="Send To The Future 🚀" onClick={handleSubmit} full />
      </div>
    </div>
  );
}

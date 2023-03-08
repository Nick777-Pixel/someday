import React, { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default function Brew() {
  const [message, setMessage] = useState({
    to: "",
    from: "",
    message: "",
    anonymous: false,
    notify: false,
  });
  return (
    <div className="bg-base-200">

    <div className="font-quicksand max-w-4xl mx-auto p-4">
      <TextInput
        label="Reciever's Email Address"
        placeholder="Example : mail@hosenur.dev"
        full
        />
      <TextInput
        type="date"
        label="Select Message Delivery Date"
        placeholder="Example : mail@hosenur.dev"
        full
        />
      <label className="label">Message</label>

      <textarea
        className="textarea textarea-primary w-full h-40 my-2"
        placeholder="Message"
      ></textarea>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Send Anonymous Message</span>
          <input
            type="checkbox"
            className="toggle"
            checked={message.anonymous}
            onChange={(e) =>
              setMessage({ ...message, anonymous: e.target.checked })
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
              setMessage({ ...message, notify: e.target.checked })
            }
            />
        </label>
      </div>
      <Button text="Send To The Future 🚀" full />
    </div>
            </div>
  );
}

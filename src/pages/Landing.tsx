import { Account, ID } from "appwrite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import client from "../utils/appwrite";
export default function Auth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(email);
    const account = new Account(client);
    const promise = account
      .createMagicURLSession(ID.unique(), email, "http://localhost:5173/verify")
      .then((response) => {
        navigate("/sent");
      });
  };
  return (
    <div className="hero h-[90vh] font-quicksand bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl ">
          <h1 className="text-5xl font-bold uppercase">
            Get Started With SomeDay!!!
          </h1>
          <p className="py-6">
            Send your love beyond time. Whether you want to share your deepest
            thoughts, tell a future self about your achievements, or simply say
            'I love you' to someone special, SomeDay is the perfect place to do
            it.
          </p>

          <TextInput
            placeholder="Example : mail@hosenur.dev"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit} text="Get Started" />
        </div>
      </div>
    </div>
  );
}

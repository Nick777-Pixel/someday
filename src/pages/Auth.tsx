import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import nhost from "../utils/nhost";

export default function Auth() {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    nhost.auth.signIn({ email });
  };
  return (
    <div className="flex flex-row min-h-screen font-roboto-mono">
      <div className="w-3/5 bg-black"></div>
      <div className="w-2/5 flex items-center justify-center">
        <div className="w-96 bg-slate-100 p-5 rounded">
          <TextInput label="Email" placeholder="Example : mail@hosenur.dev" value={email} />
          <Button text="Email Me A Magic Link 🎊"/>
        </div>
      </div>
    </div>
  );
}

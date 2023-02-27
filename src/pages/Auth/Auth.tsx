import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import nhost from "../../utils/nhost";

export default function Auth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    nhost.auth.signIn({ email }).then(() => {
      navigate("sent");
    });
  };
  return (
    <div className="flex flex-row min-h-screen font-roboto-mono">
      <div className="w-3/5 bg-black"></div>
      <div className="w-2/5 flex items-center justify-center">
        <div className="w-96 bg-[#EFEFEF] p-5 rounded">
          <TextInput
            label="Email"
            placeholder="Example : mail@hosenur.dev"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit} text="Email Me A Magic Link 🎊" />
        </div>
      </div>
    </div>
  );
}

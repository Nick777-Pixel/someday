import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../utils/appwrite";
import Lottie from "lottie-react";
import anim from "../animations/heart.json";
import { useAuth } from "../contexts/AuthContext";
export default function Verify() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") as string;
  const secret = searchParams.get("secret") as string;
  const { setCurrentUser }:any = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userId, secret);
    if (userId && secret) {
      const promise = account
        .updateMagicURLSession(userId, secret)
        .then((response) => {
          setCurrentUser(response);
          navigate("/brew");
        });
    }
  }, [userId, secret]);

  return (
    <div className="flex h-[90vh] items-center justify-center">
      <Lottie style={{ width: 400 }} animationData={anim} />
    </div>
  );
}

import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import client from "../utils/appwrite";
import { Account } from "appwrite";
export default function Verify() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId") as string;
  const secret = searchParams.get("secret") as string;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userId, secret);
    const account = new Account(client);
    if (userId && secret) {
      const promise = account
        .updateMagicURLSession(userId, secret)
        .then((response) => {
          navigate("/brew");
        });
    }
  }, [userId, secret]);

  return <div>Verify</div>;
}

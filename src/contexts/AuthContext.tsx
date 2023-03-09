import { Account } from "appwrite";
import React, { useContext, useEffect, useState } from "react";
const AuthContext = React.createContext({});
import client from "../utils/appwrite";
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const account = new Account(client);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const promise = account.get();
    promise.then((response:any) => {
      setCurrentUser(response);
      console.log(response);
    });
  }, []);
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

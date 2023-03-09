import { Account } from "appwrite";
import React, { useContext, useEffect, useState } from "react";
const AuthContext = React.createContext({});
import { account } from "../utils/appwrite";
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const promise = account.get();
    promise.then((response: any) => {
      setCurrentUser(response);
    });
  }, []);
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

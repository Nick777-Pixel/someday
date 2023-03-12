import { Account } from "appwrite";
import React, { useContext, useEffect, useState } from "react";
const AuthContext = React.createContext({});
import { account } from "../utils/appwrite";
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const promise = account.get();
    promise.then((response: any) => {
      setCurrentUser(response);
      setLoading(false);
    });
  }, []);
  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

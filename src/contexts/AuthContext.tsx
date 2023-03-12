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
    account.get().then((response: any) => {
      setCurrentUser(response);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  }, []);
  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

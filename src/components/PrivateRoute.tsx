import React from "react";
import { useUserData } from "@nhost/react";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUserData();
  if (!user) {
    return <Navigate to="/auth" />;
  }
  return children;
}

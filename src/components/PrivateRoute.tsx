import { Route,redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function PrivateRoute() {
  const { currentUser }: any = useAuth();
}

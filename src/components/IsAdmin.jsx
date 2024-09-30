import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function IsAdmin( { children } ) {
  
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading ...</p>;

  if (!user || user.type !== "admin") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsAdmin;

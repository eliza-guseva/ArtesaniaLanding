import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function IsPrivate( { children } ) {
  
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default IsPrivate;

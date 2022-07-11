import React from "react";
import { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  const userContext = useContext(UserContext);
  return (
    <button onClick={() => userContext.onLoggedIn("username")}>Login</button>
  );
}

export default Login;

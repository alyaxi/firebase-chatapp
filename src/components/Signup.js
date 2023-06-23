import React from "react";
import { useAuth } from "../context/useAuth";
import "../App.css";
const Signup = () => {
  const { login } = useAuth();
  return (
    <div>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button
          onClick={login}
          className="login"
          style={{ color: "black", display: "flex" }}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;

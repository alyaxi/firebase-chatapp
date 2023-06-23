import React from "react";
import { signInWithGoogle } from "../services/auth";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = React.useState(null);

  const login = async () => {
    const user = await signInWithGoogle();
    console.log(user, "loginsuerere");
    if (user) {
      setUser(user);
    }
  };

  const value = { user, login };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };

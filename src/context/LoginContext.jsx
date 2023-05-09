import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("Logged in successfully!");
      setIsAuthenticated(true);
    } else {
      console.log("Invalid email or password.");
    }
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

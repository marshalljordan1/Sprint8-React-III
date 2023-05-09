import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [alert, setAlert] = useState(null);

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
      setAlert("Login successful");
      setIsAuthenticated(true);
    } else {
      setAlert("Invalid email or password");
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
        alert,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

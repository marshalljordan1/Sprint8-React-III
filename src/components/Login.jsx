import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    alert,
  } = useContext(LoginContext);

  return (
    <div className="log-sign-page">
      <div className="log-sign-container">
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: "100%" }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%" }}
          />
        </label>
        <br />
        {alert && (
          <div
            className="alert"
            style={{
              color: alert === "Login successful" ? "green" : "red",
            }}
          >
            {alert}
          </div>
        )}
        <br />
        <button className="log-sign-page-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

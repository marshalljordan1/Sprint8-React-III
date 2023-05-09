import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useContext(LoginContext);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button className="login-page-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

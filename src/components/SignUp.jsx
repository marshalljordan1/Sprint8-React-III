import { useContext } from "react";
import { SignUpContext } from "../context/SignUpContext";

const SignUp = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignUp,
    alert,
  } = useContext(SignUpContext);

  return (
    <div className="log-sign-page">
      <div className="log-sign-container">
        <h2>Sign Up</h2>
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
              color:
                alert === "User registered successfully!" ? "green" : "red",
            }}
          >
            {alert}
          </div>
        )}
        <br />
        <button className="log-sign-page-button" onClick={handleSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;

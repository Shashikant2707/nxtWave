import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginCSS } from "./Style/LoginCSS";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileNumber === "" || password === "") {
      setError("All fields are required");
      return;
    }
    if (mobileNumber.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    alert("Login successful");
    navigate("/");
  };

  return (
    <div className="login-page">
      <Helmet>
        <style>{LoginCSS}</style>
      </Helmet>
      <form onSubmit={handleLogin}>
        <div className="number">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            maxLength={10}
          />
        </div>
        <div className="number">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

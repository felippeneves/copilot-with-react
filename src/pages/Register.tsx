import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const validateUsername = (value: string): string => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(value) ? "" : "Invalid username";
  };

  const validateMobile = (value: string): string => {
    const regex = /^55\d{9}$/;
    return regex.test(value) ? "" : "Invalid mobile number";
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "600px",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "16px",
  };

  const inputStyle = {
    padding: "16px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "14px",
  };

  const labelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#f9f9f9",
    borderRadius: "8px",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Register Page</h1>
      <form style={formStyle}>
        <label style={labelStyle}>
          Username or Email
          <input
            type="text"
            name="username"
            id="username"
            data-testid="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              const value = e.target.value;
              setUsername(value);
              setUsernameError(validateUsername(value));
            }}
            style={inputStyle}
          />
          {usernameError && <p style={errorStyle}>{usernameError}</p>}
        </label>
        <label style={labelStyle}>
          BR Mobile Number
          <input
            type="tel"
            id="mobile"
            name="mobile"
            data-testid="mobile"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => {
              const value = e.target.value;
              setMobile(value);
              setMobileError(validateMobile(value));
            }}
            style={inputStyle}
          />
          {mobileError && <p style={errorStyle}>{mobileError}</p>}
        </label>
        <input
          type="submit"
          id="submit"
          data-testid="submit"
          value="Submit"
          style={{
            ...inputStyle,
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
}

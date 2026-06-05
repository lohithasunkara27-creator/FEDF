

import Navbar from "../components/Navbar";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <Navbar />

      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
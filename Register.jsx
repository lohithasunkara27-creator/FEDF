

import Navbar from "../components/Navbar";
import "../styles/Register.css";

function Register() {
  return (
    <>
      <Navbar />

      <div className="register-container">
        <form className="register-form">
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
      u.email === email &&
      u.password === password
    );

    if(user){

      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      alert("Login Successful");

      navigate("/profile");
    }
    else{
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <h2>Welcome Back 👋</h2>

           <p>
            Sign in to access your wishlists
            and saved products.
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />
            
          <button type="submit">
            Sign In
          </button>

          <span>
            Don't have an account?
            <Link to="/register">
              Create One
            </Link>
          </span>

        </form>

      </div>
    </>
  );
}

export default Login;
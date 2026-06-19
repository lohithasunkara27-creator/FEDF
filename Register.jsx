import { Link } from "react-router-dom";
import "../styles/Register.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const exists =
      users.find(
        user => user.email === email
      );

    if(exists){

      alert("Email already exists");
      return;
    }

    const newUser = {

      id: Date.now(),

      username: name,

      email,

      password
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    navigate("/login");
  };
  
  return (
    <>
      <Navbar />

      <div className="register-container">

        <form className="register-form"  onSubmit={handleRegister}>

          <h2>Create Account ✨</h2>

          <p>
            Join ShopWish and organize
            your shopping experience.
          </p>

          <input
            type="text"
            placeholder="Full Name" value={name}
            onChange={(e)=>
            setName(e.target.value)
           }
          />

          <input
            type="email"
            placeholder="Email Address"
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

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Create Account
          </button>

          <span>
            Already have an account?
            <Link to="/login">
              Sign In
            </Link>
          </span>

        </form>

      </div>
    </>
  );
}
export default Register;
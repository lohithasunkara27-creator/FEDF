

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("currentUser")
    );

  const logout = () => {

    localStorage.removeItem(
      "currentUser"
    );

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding:"40px"
        }}
      >

        <h1>
          Welcome,
          {user?.username} 👋
        </h1>
        <br><br></br></br>
        <h3>
          Email:
          {user?.email}
        </h3>

        <button
          onClick={logout}
        >
          Logout
        </button>

      </div>
    </>
  );
}

export default Profile;
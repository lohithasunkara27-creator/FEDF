import Navbar from "../components/Navbar";
import "../styles/Home.css";
import RecentlyViewed from "../components/RecentlyViewed";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <Navbar />



  <div className="hero">
    <div className="hero-content">
      <h1>Welcome to ShopWish ✨</h1>
      <p>
        Save products you love, organize wishlists,
        track price drops, and manage your shopping journey in one secure place.
      </p>

      <div className="hero-buttons">
        <button onClick={() =>
        user
        ? navigate("/products")
        : navigate("/register")
        }
        >
      {user ? "Explore Products" : "Get Started"}
       </button>
      
      {!user && (
      <button
      className="secondary-btn"
      onClick={() => navigate("/login")}
      >
      Sign In</button>
      )}
      </div>
    </div>
  </div>

  <RecentlyViewed />

</>

  );
}

export default Home;
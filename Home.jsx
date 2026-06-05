

import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="hero-content">
        <h1>Welcome to ShopWish ✨</h1>

        <p>
        Save products you love, organize wishlists,
        track price drops, and shop smarter with
        your personal shopping companion.
        </p>

        <button>Explore Products</button>
        </div>
      </div>
    </>
  );
}

export default Home;
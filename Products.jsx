import { useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import products from "../data/products";
import { addNotification } from "../utils/notification";
import "../styles/Products.css";


function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [website, setWebsite] = useState("All");
  const user =
  JSON.parse(
    localStorage.getItem("currentUser")
  );

  const filteredProducts = products.filter(product => {

    return (
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&

      (category === "All" ||
       product.category === category) &&

      (website === "All" ||
       product.website === website)
    );

  });
  function checkPriceDrops() {

  if(!user) {
    alert("Please login first");
    return;
  }


  const randomProduct =
    products[
      Math.floor(
        Math.random() * products.length
      )
    ];


  const oldPrice =
    randomProduct.price + 500;


  addNotification(
    user.email,
    `🔥 Price Drop! ${randomProduct.name} dropped from ₹${oldPrice} to ₹${randomProduct.price}`
  );


  alert(
    "New price drop alert added 🔥"
  );
}


function checkStock() {

  if(!user) {
    alert("Please login first");
    return;
  }


  const randomProduct =
    products[
      Math.floor(
        Math.random() * products.length
      )
    ];


  addNotification(
    user.email,
    `📦 ${randomProduct.name} is back in stock!`
  );


  alert(
    "Stock update added 📦"
  );
}
  return (
    <>
      <Navbar />

      <div className="products-page">

        <h1>Explore Products</h1>
        
        <div className="deals-box">

  <h3>
    Deals & Alerts 🔔
  </h3>


  <button
    onClick={checkPriceDrops}
  >
    🔥 Check Price Drops
  </button>


  <button
    onClick={checkStock}
  >
    📦 Check Stock Updates
  </button>

</div>

        <div className="filters">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />


          <select
            onChange={(e)=>setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Home</option>
          </select>


          <select
            onChange={(e)=>setWebsite(e.target.value)}
          >
            <option>All</option>
            <option>Amazon</option>
            <option>Myntra</option>
            <option>Flipkart</option>
            <option>Littlebox</option>
          </select>

        </div>


        <div className="product-grid">

          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </>
  );
}

export default Products;
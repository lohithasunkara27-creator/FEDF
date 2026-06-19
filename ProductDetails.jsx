import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/ProductDetails.css";
import Navbar from "../components/Navbar";
import { addNotification } from "../utils/notification";
import products from "../data/products";


function ProductDetails() {

  const { id } = useParams();


  const product = products.find(
    p => p.id === Number(id)
  );
  const user = JSON.parse(
  localStorage.getItem("currentUser")
);

const getBoards = () => {

  const data =
    JSON.parse(
      localStorage.getItem("wishboards")
    ) || {};

  return user
    ? data[user.email] || []
    : [];
};


const userBoards = getBoards();

const [selectedBoard, setSelectedBoard] =
  useState("");


  let recent =
    JSON.parse(
      localStorage.getItem("recentProducts")
    ) || [];


  if(!recent.includes(product.id)) {

    recent.unshift(product.id);

    localStorage.setItem(
      "recentProducts",
      JSON.stringify(recent.slice(0,5))
    );
  }
function saveToWishlist() {

  if (!selectedBoard) {
    alert("Please select a Wishboard ❤️");
    return;
  }


  const data =
    JSON.parse(
      localStorage.getItem("wishboards")
    ) || {};


  const boards =
    data[user.email] || [];


  const updatedBoards =
    boards.map(board => {


      if (board.id === Number(selectedBoard)) {


        // Prevent duplicate products
        if (
          board.products.includes(product.id)
        ) {

          alert(
            "Product already exists in this board!"
          );

          return board;
        }


        return {

          ...board,


          products: [

            ...board.products,

            product.id

          ]

        };

      }


      return board;

    });


  data[user.email] =
    updatedBoards;


  localStorage.setItem(

    "wishboards",

    JSON.stringify(data)

  );

  addNotification(
  user.email,
  `❤️ ${product.name} added to your Wishboard`
 );
  alert(

    "Added to your Wishboard ❤️"

  );


}

  return (
    <>
      <Navbar />

      <div className="details">

        <img 
          src={product.image}
          alt={product.name}
          width="300"
        />
        
         <div className="details-info">
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>
          ⭐ {product.rating}
        </p>

        <p>
          Platform:<strong>
        {" "}
        {product.website}
        </strong>
        </p>


        <p>
          {product.description}
        </p>


        <a
          href={product.link}
          target="_blank"
          rel="noreferrer"
          className="visit-btn"
        >
          Visit Product
        </a>
        {
  user && (

    <div className="wishlist-box">

      <h3>
        Save to Wishboard ❤️
      </h3>
      {
 userBoards.length === 0 &&
 <p>
  Create a Wishboard first.
 </p>
}


      <select
        value={selectedBoard}

        onChange={(e)=>
          setSelectedBoard(e.target.value)
        }
      >

        <option value="">
          Select Board
        </option>


        {
          userBoards.map(board => (

            <option
              key={board.id}
              value={board.id}
            >
              {board.name}
            </option>

          ))
        }

      </select>


      <button
        onClick={saveToWishlist}  disabled={userBoards.length === 0}
      >
        Save
      </button>

    </div>

  )
}
    </div>
    </div>
    </>
  );
}


export default ProductDetails;
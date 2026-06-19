import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products";
import "../styles/BoardPage.css";
import { addNotification } from "../utils/notification";

function BoardPage() {

  const { id } = useParams();

  const user =
    JSON.parse(localStorage.getItem("currentUser"));

  const data =
    JSON.parse(localStorage.getItem("wishboards")) || {};

  const boards =
    data[user.email] || [];

  const board =
    boards.find(
      b => b.id === Number(id)
    );


  const initialProducts = board
    ? products.filter(product =>
        board.products.includes(product.id)
      )
    : [];


  const [boardProducts, setBoardProducts] =
    useState(initialProducts);


  if (!board) {
    return (
      <>
        <Navbar />
        <h2>Board not found</h2>
      </>
    );
  }


  // Remove from board
  function removeProduct(productId) {

    const updatedBoards =
      boards.map(b => {

        if (b.id === board.id) {

          return {
            ...b,
            products: b.products.filter(
              id => id !== productId
            )
          };
        }

        return b;
      });


    data[user.email] = updatedBoards;


    localStorage.setItem(
      "wishboards",
      JSON.stringify(data)
    );


    setBoardProducts(
      boardProducts.filter(
        product => product.id !== productId
      )
    );

  }


  // Move to cart
  function moveToCart(productId) {

    const carts =
      JSON.parse(localStorage.getItem("cart"))
      || {};


    const userCart =
      carts[user.email] || [];


    const existing =
      userCart.find(
        item => item.id === productId
      );


    if (existing) {

      existing.quantity += 1;

    }

    else {

      userCart.push({
        id: productId,
        quantity: 1
      });

    }


    carts[user.email] = userCart;


    localStorage.setItem(
      "cart",
      JSON.stringify(carts)
    );


    removeProduct(productId);

    addNotification(
  user.email,
  `🛒 ${products.find(p => p.id === productId).name} moved to Cart`
); 

    alert(
      "Moved to Cart 🛒"
    );
  }


  return (
    <>
      <Navbar />

      <div className="board-page">

        <h1>
          {board.name} ❤️
        </h1>


        {
          boardProducts.length === 0 ? (

            <div className="empty-board">

              <h2>
                Your board is empty 📌
              </h2>

              <p>
                Explore products and save your favorites here.
              </p>

            </div>

          ) : (

            <div className="product-grid">

              {
                boardProducts.map(product => (

                  <div
                    className="saved-product"
                    key={product.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />


                    <h3>
                      {product.name}
                    </h3>


                    <p>
                      ₹{product.price}
                    </p>


                    <p>
                      ⭐ {product.rating}
                    </p>


                    <button
                      className="cart-btn"
                      onClick={() =>
                        moveToCart(product.id)
                      }
                    >
                      Move to Cart 🛒
                    </button>


                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeProduct(product.id)
                      }
                    >
                      Remove ❌
                    </button>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </>
  );
}

export default BoardPage;
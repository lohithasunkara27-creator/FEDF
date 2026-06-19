import { useState } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products";
import "../styles/Cart.css";


function Cart() {

  const user =
    JSON.parse(
      localStorage.getItem("currentUser")
    );


  const cartData =
    JSON.parse(
      localStorage.getItem("cart")
    ) || {};


  const initialCart =
    user
    ? cartData[user.email] || []
    : [];


  const [cart, setCart] =
    useState(initialCart);



  // Save updated cart
  function updateCart(updatedCart) {

    const data =
      JSON.parse(
        localStorage.getItem("cart")
      ) || {};


    data[user.email] = updatedCart;


    localStorage.setItem(
      "cart",
      JSON.stringify(data)
    );


    setCart(updatedCart);
  }



  // Increase quantity
  function increaseQuantity(id) {

    const updated =
      cart.map(item =>

        item.id === id
        ?
        {
          ...item,
          quantity: item.quantity + 1
        }

        :
        item

      );


    updateCart(updated);
  }



  // Decrease quantity
  function decreaseQuantity(id) {


    const updated =
      cart.map(item =>

        item.id === id
        ?
        {
          ...item,
          quantity:
            item.quantity - 1
        }

        :
        item

      )
      .filter(item =>
        item.quantity > 0
      );


    updateCart(updated);
  }



  // Remove completely
  function removeItem(id) {

    const updated =
      cart.filter(
        item =>
          item.id !== id
      );


    updateCart(updated);

  }



  // Calculate total
  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            p => p.id === item.id
          );


        return sum +
          product.price *
          item.quantity;


      },
      0
    );



  return (
    <>
      <Navbar />

      <div className="cart-page">


        <h1>
          My Cart 🛒
        </h1>


        {
          cart.length === 0

          ?

          <div className="empty-cart">

            <h2>
              Your cart is empty 🛍️
            </h2>

            <p>
              Move products from your Wishboards to buy them later.
            </p>

          </div>


          :

          <>
            {
              cart.map(item => {

                const product =
                  products.find(
                    p => p.id === item.id
                  );


                return (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                    />


                    <div>

                      <h3>
                        {product.name}
                      </h3>


                      <p>
                        ₹{product.price}
                      </p>


                      <div className="quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          -
                        </button>


                        <span>
                          {item.quantity}
                        </span>


                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>


                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        Remove ❌
                      </button>


                    </div>

                  </div>

                );

              })
            }


            <div className="total-box">

              <h2>
                Total: ₹{total}
              </h2>

            </div>

          </>

        }


      </div>

    </>
  );
}


export default Cart;
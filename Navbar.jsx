import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );


  let unreadCount = 0;


  if (user) {

    const notifications =
      JSON.parse(
        localStorage.getItem("notifications")
      ) || {};


    const userNotifications =
      notifications[user.email] || [];


    unreadCount =
      userNotifications.filter(
        note => !note.read
      ).length;
  }


  return (

    <nav className="navbar">

      <div className="logo">
        ShopWish ✨
      </div>


      <ul className="nav-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>


        <li>
          <Link to="/products">
            Products
          </Link>
        </li>


        {
          user && (
            <>
              <li>
                <Link to="/wishlist">
                  Wishboards
                </Link>
              </li>


              <li>
                <Link to="/cart">
                  Cart
                </Link>
              </li>


              <li className="notification-link">

                <Link to="/notifications">

                  🔔

                  {
                    unreadCount > 0 && (

                      <span className="badge">

                        {unreadCount}

                      </span>

                    )

                  }

                </Link>

              </li>


              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>

            </>
          )
        }


        {
          !user && (
            <>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>


              <li>
                <Link to="/register">
                  Register
                </Link>
              </li>
            </>
          )
        }

      </ul>

    </nav>

  );

}


export default Navbar;
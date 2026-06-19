import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  getNotifications,
  markAllRead,
  clearNotifications
} from "../utils/notification";

import "../styles/Notifications.css";


function Notifications() {

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );


  const [notifications, setNotifications] = useState(
    user ? getNotifications(user.email) : []
  );


  function handleRead() {

    markAllRead(user.email);

    setNotifications(
      getNotifications(user.email)
    );
  }


  function handleClear() {

    clearNotifications(user.email);

    setNotifications([]);

  }


  return (
    <>
      <Navbar />

      <div className="notifications-page">

        <h1>
          Notifications 🔔
        </h1>


        {notifications.length === 0 ? (

          <p>
            You're all caught up! 🎉
          </p>

        ) : (

          <>

            {
              notifications.map(note => (

                <div
                  className={
                    `notification-card ${
                      note.read ? "read" : ""
                    }`
                  }

                  key={note.id}
                >

                  <p>
                    {note.message}
                  </p>

                  <span>
                    {note.time}
                  </span>

                </div>

              ))
            }


            <div className="notification-buttons">


              <button
                onClick={handleRead}
              >
                Mark All Read
              </button>


              <button
                onClick={handleClear}
              >
                Clear All
              </button>


            </div>

          </>

        )}


      </div>

    </>
  );

}


export default Notifications;
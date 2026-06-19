
export function addNotification(email, message) {

  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || {};


  const userNotifications =
    notifications[email] || [];


  const newNotification = {

    id: Date.now(),

    message: message,

    time: new Date().toLocaleString(),

    read: false

  };


  userNotifications.unshift(newNotification);


  notifications[email] =
    userNotifications;


  localStorage.setItem(
    "notifications",
    JSON.stringify(notifications)
  );

}



// Get notifications for a user

export function getNotifications(email) {

  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || {};


  return notifications[email] || [];

}



// Mark all notifications as read

export function markAllRead(email) {

  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || {};


  if(notifications[email]) {

    notifications[email] =
      notifications[email].map(notification => {

        return {

          ...notification,

          read: true

        };

      });

  }


  localStorage.setItem(
    "notifications",
    JSON.stringify(notifications)
  );

}



// Clear all notifications

export function clearNotifications(email) {


  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || {};


  notifications[email] = [];


  localStorage.setItem(
    "notifications",
    JSON.stringify(notifications)
  );

}
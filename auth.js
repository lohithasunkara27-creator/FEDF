

export const seedUsers = () => {

  const users = localStorage.getItem("users");

  if (!users) {

    const defaultUsers = [
      {
        id: 1,
        username: "Lohitha",
        email: "ls@shopwish.com",
        password: "ls123"
      },

      {
        id: 2,
        username: "Ananya",
        email: "a@shopwish.com",
        password: "a123"
      }
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(defaultUsers)
    );
  }
};
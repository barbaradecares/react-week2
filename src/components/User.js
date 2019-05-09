import React from "react";

const User = ({ redirectHome, logout }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        //   localStorage.removeItem("logged_user");
        logout();
        redirectHome();
      }}
    >
      Logout
    </button>
  );
};
export default User;

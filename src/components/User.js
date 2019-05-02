import React from "react";

const User = ({ redirectHome, logout }) => {
  if (localStorage.logged_user) {
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
  } else {
    return <div>You're not logged in</div>;
  }
};
export default User;

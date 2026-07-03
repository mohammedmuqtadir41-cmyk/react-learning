import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div id="logo">
        <img src="https://placehold.co/100x50" alt="Logo" />
      </div>
      
      <div id="search-bar">
        <input placeholder="what would you like" />
      </div>
      
      <div className="nav-items">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Header />);

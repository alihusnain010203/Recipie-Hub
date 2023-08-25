import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo-div">
        <img className="logo-img" src="images/1.png" height="63px" alt="" />
      </div>

      <div className="Links">
        <Link className="Link" to="/Meals">
          Meals
        </Link>
        <Link className="Link" to="/Gallery">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

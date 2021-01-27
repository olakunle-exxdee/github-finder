import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="list-wrapper">
      <ul className="list">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
};

export default Navbar;

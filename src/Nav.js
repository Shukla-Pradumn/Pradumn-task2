import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">E-Commerce</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/shop">ContactUs</Link>
              <Link to="/signup">Create Account</Link>
              {/* <Link to="/login">Login</Link> */}
           </ul>
        </div>
  );

}
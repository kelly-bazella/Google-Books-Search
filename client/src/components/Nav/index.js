import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        React Books Search
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         <li className="nav-item active " style={{marginRight:"10px"}}> 
         <Link to="/">Search 
         {/* <span className="sr-only">(current)</span> */}
         </Link> 
          </li>
          <li className="nav-item">
          <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

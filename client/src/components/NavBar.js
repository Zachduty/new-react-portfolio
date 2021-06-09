import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav class="col md-6">
      <div>
        <img className="self" src="/images/self.jpeg" />
      </div>
      <Link to="/">
        <a id="navName">Zach Duty</a>
      </Link>
      <div className="navvv">
        <ul>
          <li className="navbar">
            <Link to="/contact">
              <a className="navlink">Contact</a></Link>
          </li>
          <li className="navbar">
            <Link to="/resume">
              <a className="navlink">Resume</a>{" "}
            </Link>
          </li>
          <li className="navbar">
            <Link to="/projects">
              <a className="navlink">Projects</a>
            </Link>
          </li>
          <li className="navbar">
            <Link to="/aboutme">
              <a className="navlink">About Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navBar">
        <div className="navItem">
          <Link className="navLink" to="/">
            Home
          </Link>
        </div>
        <div className="navItem">
          <Link className="navLink" to="/products">
            Products
          </Link>
        </div>
        <div className="navItem">
          <Link className="navLink" to="/about">
            About
          </Link>
        </div>
        <div className="navItem">
          <Link className="navLink" to="/aboutMe">
            AboutMe
          </Link>
        </div>

        <div className="navItem">
          <Link className="navLink" to="/contact">
            Contact Us
          </Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);

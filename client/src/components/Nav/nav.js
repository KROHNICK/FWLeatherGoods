import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-container">
        <nav className="navBar">
          <div className="navItem">
            <Link to="/">Home</Link>
          </div>
          <div className="navItem">
            <Link to="/products">Products</Link>
          </div>
          <div className="navItem">
            <Link to="/about">About</Link>
          </div>
          <div className="navItem">
            <Link to="/aboutMe">AboutMe</Link>
          </div>
          <div className="navItem">
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);

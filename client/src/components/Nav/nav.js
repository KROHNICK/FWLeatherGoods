import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/aboutMe">AboutMe</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);

import React, { Component } from "react";

import Nav from "../Nav/nav";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="navDiv">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;

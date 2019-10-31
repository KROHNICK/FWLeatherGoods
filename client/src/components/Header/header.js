import React, { Component } from "react";

import Nav from "../Nav/nav";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img
          className="stock"
          src="http://www.kabu-load.net/data/out/1/IMG_444.jpg"
        />
        <div className="navDiv">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Header;

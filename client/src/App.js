import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import { testServer } from "./actions/index";

import "./App.css";

import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import Contact from "./views/ContactView";

class App extends Component {
  componentDidMount() {
    this.props.testServer();
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomeView} />
        <Route path="/products" component={ProductsView} />
        <Route path="/about" component={AboutView} />
        <Route path="/contact" component={ContactView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  isTestingServer: state.isTestingServer,
  isServerFunctional: state.isServerFunctional
});

export default connect(
  mapStateToProps,
  { testServer }
)(withRouter(App));

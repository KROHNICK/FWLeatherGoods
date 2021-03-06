import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import { testServer } from "./actions/index";

import "./App.css";

import Header from "./components/Header/header";
import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductView";
import AboutView from "./views/AboutView";
import AboutMeView from "./views/AboutMeView";
import ContactView from "./views/ContactView";

class App extends Component {
  componentDidMount() {
    // this.props.testServer();
  }
  render() {
    return (
      <div className="App">
        <div className="headerDiv">
          <Header />
        </div>
        <Route exact path="/" component={HomeView} />
        <Route path="/products" component={ProductsView} />
        <Route path="/about" component={AboutView} />
        <Route path="/aboutMe" component={AboutMeView} />
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

import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import { testServer } from "./actions/index";

import "./App.css";

import HomeView from "./views/HomeView";

class App extends Component {
  componentDidMount() {
    this.props.testServer();
  }
  render() {
    return (
      <div className="App">
        <Route exaxp path="/" component={HomeView} />
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

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { testServer } from "./actions/index";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.testServer();
  }
  render() {
    return <></>;
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
)(App);

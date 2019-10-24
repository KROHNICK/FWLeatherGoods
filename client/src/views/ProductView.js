import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/index";

import Products from "../components/Products/products";

class ProductsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <Products products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.prod.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductsView);

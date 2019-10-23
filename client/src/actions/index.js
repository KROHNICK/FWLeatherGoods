import axios from "axios";

export const TEST_SERVER = "TEST_SERVER";
export const TEST_SERVER_SUCCESS = "TEST_SERVER_SUCCESS";
export const TEST_SERVER_FAILURE = "TEST_SERVER_FAILURE";

export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS";
export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

const baseURL =
  window.location.hostname === "localhost" ? "http://localhost:4000" : "url";

export const getProducts = () => dispatch => {
  dispatch({ type: FETCHING_PRODUCTS });
  return axios
    .get(`${baseURL}/api/products/`)
    .then(res => {
      dispatch({ type: PRODUCTS_FETCHED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PRODUCTS_FAILURE, payload: err });
    });
};

export const testServer = () => dispatch => {
  dispatch({ type: TEST_SERVER });
  return axios
    .get(`${baseURL}/api/`)
    .then(res => {
      dispatch({ type: TEST_SERVER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TEST_SERVER_FAILURE, payload: err });
    });
};

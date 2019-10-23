import {
  TEST_SERVER,
  TEST_SERVER_SUCCESS,
  TEST_SERVER_FAILURE,
  FETCHING_PRODUCTS,
  PRODUCTS_FETCHED,
  PRODUCTS_FAILURE
} from "../actions";

const initialState = {
  data: [],
  products: [],
  error: null,
  isTestingServer: false,
  isServerFunctional: false,
  isFetchingProducts: false,
  isProductsFetched: false
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        error: null,
        isFetchingProducts: true,
        isProductsFetched: false
      };
    case PRODUCTS_FETCHED:
      return {
        ...state,
        products: [],
        isFetchingProducts: false,
        isProductsFetched: true
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        error: null,
        isFetchingProducts: false,
        isProductsFetched: false
      };
    case TEST_SERVER:
      return {
        ...state,
        error: null,
        isTestingServer: true,
        isServerFunctional: false
      };
    case TEST_SERVER_SUCCESS:
      return {
        ...state,
        data: [],
        isTestingServer: false,
        isServerFunctional: true
      };
    case TEST_SERVER_FAILURE:
      return {
        ...state,
        error: null,
        isTestingServer: false,
        isServerFunctional: false
      };
    default:
      return state;
  }
};

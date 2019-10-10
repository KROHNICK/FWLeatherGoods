import {
  TEST_SERVER,
  TEST_SERVER_SUCCESS,
  TEST_SERVER_FAILURE
} from "../actions";

const initialState = {
  data: [],
  error: null,
  isTestingServer: false,
  isServerFunctional: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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

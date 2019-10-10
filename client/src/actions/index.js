import axios from "axios";

export const TEST_SERVER = "TEST_SERVER";
export const TEST_SERVER_SUCCESS = "TEST_SERVER_SUCCESS";
export const TEST_SERVER_FAILURE = "TEST_SERVER_FAILURE";

const baseURL =
  window.location.hostname === "localhost" ? "http://localhost:4000" : "url";

export const test = () => dispatch => {
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

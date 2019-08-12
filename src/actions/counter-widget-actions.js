import axios from "axios";

export const increaseCounter = payload => dispatch => {
  dispatch({
    type: "ON_INCREMENT",
    payload
  });
};

export const decreaseCounter = payload => dispatch => {
  dispatch({
    type: "ON_DECREMENT",
    payload
  });
};

export const resetCounter = (payload = 0) => dispatch => {
  dispatch({
    type: "ON_RESET",
    payload
  });
};

export const testpost = data => {
  axios
    .post("http://jsonplaceholder.typicode.com/posts", {
      firstName: "Fred",
      lastName: "Flintstone"
    })
    .then(function(response) {
      console.log("sucresponse", response);
    })
    .catch(function(error) {
      console.log("errorresponse", error);
    });
};

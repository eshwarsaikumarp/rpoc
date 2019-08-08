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
import API from "../api/API";
import navData from "../_mockDB/navData.json";
import axios from "axios";

export const fetchPeople = url => dispatch => {
  API.get(url)
    .then(response => {
      dispatch({
        type: "PEOPLE",
        payload: response.data
      });
    })
    .catch(e => {
      console.log(`😱 Axios request failed: ${e}`);
    });
};

export const fetchNavData = url => dispatch => {
  axios
    .get("/navData.json")
    .then(response => {
      dispatch({
        type: "NAVBAR_DATA",
        payload: response.data
      });
    })
    .catch(e => {
      console.log(`😱 Axios request failed: ${e}`);
    });
};

export const fetchMovies = url => dispatch => {
  API.get(url)
    .then(response => {
      dispatch({
        type: "MOVIES",
        payload: response.data
      });
    })
    .catch(e => {
      console.log(`😱 Axios request failed: ${e}`);
    });
};

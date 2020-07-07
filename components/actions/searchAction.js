import Axios from "axios";
import { Site } from "../../config/site";
import store from "../store";
import { GET_ERRORS, SET_CURRENT_SEARCH } from "./types";

export const onSearch = (search) => {
  Axios.get(`${Site.getProduct}?search=${search}`)
    .then((res) => {
      const resData = res.data;
      store.dispatch(setCurrentSearch(resData));
    })
    .catch((err) => {
      return {
        type: GET_ERRORS,
        payload: err.response.data,
      };
    });
};

export const setCurrentSearch = (resData) => {
  return {
    type: SET_CURRENT_SEARCH,
    payload: resData,
  };
};

import { setAuthToken } from "../../utils/AuthService";
import jwt_decode from "jwt-decode";
import { Site } from "../../config/site";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import Axios from 'axios';
import store from '../store';

export const clearError = () => {
  return {
      type: GET_ERRORS,
      payload : {}
  }
}
export const loginUser = (userData) => {
Axios
  .post(Site.loginMember, userData)
  .then(res => {
    const { token, name } = res.data;
    localStorage.setItem("tokenLS", token);
    localStorage.setItem('name', name);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    clearError();
  })
  .catch(err => {
    return {
      type: GET_ERRORS,
      payload: err.response.data
    }
  });
};

export const logoutUser = () => {
  localStorage.removeItem('tokenLS');
  localStorage.removeItem('name');
  // Remove auth header for future request
  setAuthToken(false);
  store.dispatch(setCurrentUser({}));
}


export const setCurrentUser = (decoded) => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded
  }
}

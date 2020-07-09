import { Site } from "../../config/site";
import Axios from "axios";
import {
  ADD_PRODUCT_CART,
  COUNT_TOTAL_PRICE,
  DELETE_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  RESET_PRODUCT_CART,
} from "./types";
import store from "../store";

let productData;

export const addProduct = (id) => {
  Axios.get(`${Site.getProduct}/${id}`)
    .then((res) => {
      const { _id, name, price } = res.data;
      productData = { _id, name, price, quantity: 1, total: price };
      store.dispatch(setCurrentCart(productData));
    })
    .catch((err) => console.log(err));
};

export const setCurrentCart = (productData) => {
  return {
    type: ADD_PRODUCT_CART,
    payload: productData,
  };
};

export const deleteProduct = (id) => {
  Axios.get(`${Site.getProduct}/${id}`)
    .then((res) => {
      const { _id, price } = res.data;
      productData = { _id, quantity: 1, total: price };
      store.dispatch(setDeleteProduct(productData));
    })
    .catch((err) => console.log(err));
};

export const setDeleteProduct = (productData) => {
  return {
    type: DELETE_PRODUCT_CART,
    payload: productData,
  };
};

export const removeProduct = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT_CART,
    payload: {
      id,
    },
  });
  dispatch({ type: COUNT_TOTAL_PRICE });
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: RESET_PRODUCT_CART,
  });
};

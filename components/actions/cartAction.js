import { Site } from "../../config/site";
import Axios from "axios";
import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, CHECK_ADD_POP_UP } from "./types";
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

let idPopUp;
export const addPopUp = (id) => {
  Axios.get(`${Site.getProduct}/${id}`)
    .then((res) => {
      const { _id } = res.data;
      idPopUp = { _id };
      store.dispatch(setAddPopUp(idPopUp));
    })
    .catch((err) => console.log(err));
};

export const setAddPopUp = (idPopUp) => {
  return {
    type: CHECK_ADD_POP_UP,
    payload: idPopUp
  }
}
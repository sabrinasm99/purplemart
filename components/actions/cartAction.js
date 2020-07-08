import { Site } from "../../config/site";
import Axios from "axios";

export const addProduct = (id) => (dispatch) => {
  Axios.get(`${Site.getProduct}/${id}`).then((res) => {
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: {
        id: res.data._id,
        name: res.data.name,
        price: res.data.price,
        quantity: 1,
      },
    });
    dispatch({type: COUNT_TOTAL_PRICE})
  }).catch(err => console.log(err));
};

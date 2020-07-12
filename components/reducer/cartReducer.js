import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, CHECK_ADD_POP_UP } from "../actions/types";

const initialState = {
  list: [],
  popUp: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      if (
        state.list.filter((val) => val._id === action.payload._id).length > 0
      ) {
        const filter = state.list.map((val) => {
          if (val._id === action.payload._id) {
            return {
              ...val,
              quantity: val.quantity + action.payload.quantity,
              total: val.total + action.payload.total,
            };
          }
          return val;
        });
        return {
          ...state,
          list: filter,
        };
      } else {
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      }
    case DELETE_PRODUCT_CART:
      let unFilter = state.list.filter((val) => val._id !== action.payload._id);
      let [filter] = state.list.filter((val) => val._id === action.payload._id);
      let arrPopUp = [];
      for (let i=0; i<unFilter.length; i++) {
        arrPopUp.push(unFilter[i]._id)
      }
      if (filter.quantity > 1) {
        const newList = state.list.map((val) => {
          if (val._id === action.payload._id) {
            return {
              ...val,
              quantity: val.quantity - action.payload.quantity,
              total: val.total - action.payload.total,
            };
          }
          return val;
        });
        return {
          ...state,
          list: newList,
        };
      } else {
        return {
          ...state,
          list: unFilter,
          popUp: arrPopUp
        };
      }
    case CHECK_ADD_POP_UP:
      let filterID = state.popUp.filter(val => val._id === action.payload._id);
      if (filterID.length > 0) {
        return {
          ...state,
          popUp: popUp
        };
      } else {
        return {
          ...state,
          popUp: [...state.popUp, action.payload]
        }
      }
    default:
      return state;
  }
};

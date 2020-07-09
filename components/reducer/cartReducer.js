import {
  ADD_PRODUCT_CART,
  COUNT_TOTAL_PRICE,
  DELETE_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  RESET_PRODUCT_CART,
} from "../actions/types";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PRODUCT_CART:
      return initialState;
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
          list: filter
        }
      } else {
        return {
          ...state,
          list: [...state.list, action.payload]
        }
      }
    case COUNT_TOTAL_PRICE:
      let total = state.list.reduce((prev, cur) => {
        return prev + cur.price * cur.quantity;
      }, 0);

      return {
        ...state,
        list: [...state.list],
        totalPrice: total,
      };

    case DELETE_PRODUCT_CART:
      let unFilter = state.list.filter((val) => val._id !== action.payload._id);
      let [filter] = state.list.filter((val) => val._id === action.payload._id);
      if (filter.quantity > 1) {
        const newList = state.list.map((val) => {
          if (val._id === action.payload._id) {
            return {
              ...val,
              quantity: val.quantity - action.payload.quantity,
              total: val.total - action.payload.total
            };
          }
          return val;
        });
        return {
          ...state,
          list: newList
        }
      } else {
        return {
          ...state,
          list: unFilter
        }
      }
    case REMOVE_PRODUCT_CART:
      let filteredData = state.list.filter(
        (val) => val.id !== action.payload.id
      );
      return {
        ...state,
        list: filteredData,
      };

    default:
      return state;
  }
};

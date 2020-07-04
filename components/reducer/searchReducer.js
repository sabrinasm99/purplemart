import {SET_CURRENT_SEARCH} from '../actions/types';
import isEmpty from '../validation/isEmpty';

const initialState = {
    isChanged: false,
    payload: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_SEARCH:
        return {
          ...state,
          isChanged: !isEmpty(action.payload),
          payload: action.payload
        };
      default:
        return state;
    }
  };
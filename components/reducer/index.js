import { combineReducers } from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';


export default combineReducers({
    test: testReducer,
    auth: authReducer,
    errors: errorReducer,
    search: searchReducer,
    cart: cartReducer
});
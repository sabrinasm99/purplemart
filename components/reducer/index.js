import { combineReducers } from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';


export default combineReducers({
    test: testReducer,
    auth: authReducer,
    errors: errorReducer,
    search: searchReducer
});
import { combineReducers } from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';


export default combineReducers({
    test: testReducer,
    auth: authReducer,
    errors: errorReducer
});
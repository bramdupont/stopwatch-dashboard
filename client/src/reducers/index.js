import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import time from './time';

export default combineReducers({
    alert,
    auth,
    time
});
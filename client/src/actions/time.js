import axios from 'axios';
import {setAlert} from "./alert";
import {
    GET_TIMES,
    TIME_ERROR,
    ADD_TIME
} from "./types";

// Get time
export const getTimes = () => async dispatch => {
    try {
        const res = await axios.get('/api/times');
        dispatch({
            type: GET_TIMES,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: TIME_ERROR,
            payloads: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Add time
export const addTime = (formData) => async (dispatch) => {
    try {
        const res = await axios.post('/times', formData);

        dispatch({
            type: ADD_TIME,
            payload: res.data
        });

        dispatch(setAlert('Time Created', 'success'));
    } catch (err) {
        dispatch({
            type: TIME_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
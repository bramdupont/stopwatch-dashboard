import {
    GET_TIMES,
    TIME_ERROR
} from '../actions/types';

const initialState = {
    times: [],
    time: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_TIMES:
            return {
                ...state,
                times: payload,
                loading: false
            }
        case TIME_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}
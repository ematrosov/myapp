import {
    CLEAR_DATA,
    SET_ERROR_STATUS,
    SET_IDLE_STATUS,
    SET_LOADING_STATUS,
    SET_NEWS_LIST,
    STATUS_ERROR,
    STATUS_IDLE,
    STATUS_LOADING
} from "./news-actions";

const initialState = {
    status: STATUS_IDLE,
    news: []
}

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEWS_LIST: {
            return {
                ...state,
                news: action.payload.news
            }
        }
        case SET_IDLE_STATUS: {
            return {
                ...state,
                status: STATUS_IDLE
            }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state,
                status: STATUS_LOADING
            }
        }
        case SET_ERROR_STATUS: {
            return {
                ...state,
                status: STATUS_ERROR
            }
        }
        case CLEAR_DATA: {
            return {
                ...state,
                news: []
            }
        }
        default:
            return state
    }
}
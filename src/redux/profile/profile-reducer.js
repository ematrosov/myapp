import { CHANGE_NAME, CHANGE_STATUS } from "./profile-actions";

const initialState = {
    name: 'Egor',
    status_hungry: false
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATUS: {
            return {
                ...state,
                status_hungry: action.payload.status
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default:
            return state
    }
}
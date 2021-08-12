import { CHANGE_NAME, CHANGE_STATUS, LOGIN, LOGOUT } from "./profile-actions";

const initialState = {
    name: 'Egor',
    status_hungry: false,
    isAuthed: false

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

        case LOGIN: {
            return {
                ...state,
                isAuthed: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuthed: false
            }
        }
        default:
            return state
    }
}
import { ADD_MESSAGE } from "./messages-actions";

const initialState = [
    { id: 1, chatId: 1, currentUser: true, text: '11' },
    { id: 2, chatId: 1, currentUser: false, text: '112' },
    { id: 3, chatId: 2, currentUser: true, text: '333' },
    { id: 4, chatId: 2, currentUser: false, text: '4444' },
    { id: 5, chatId: 3, currentUser: true, text: '5555' },
    { id: 6, chatId: 3, currentUser: false, text: '66666' }
]

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return [
                ...state,
                action.payload.message
            ]
        }
        default:
            return state
    }
}
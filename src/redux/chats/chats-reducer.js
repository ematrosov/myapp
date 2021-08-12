import { ADD_CHAT, REMOVE_CHAT } from "./chats-actions";

const initialState = []


export default function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT: {
            const index = state.findIndex(chat => chat.id === action.payload.chat.id)
            if (index === -1) {
                return [...state, action.payload.chat]
            }

            return [...state]
        }
        case REMOVE_CHAT: {
            const index = state.findIndex(chat => chat.id === action.payload.chatId)
            if (index > -1) {
                state.splice(index, 1)
            }
            return [...state]
        }
        default:
            return state
    }
}
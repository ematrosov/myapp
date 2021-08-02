import { ADD_CHAT, REMOVE_CHAT } from "./chats-actions";

const initialState = [
    { name: 'Robot', id: 1 },
    { name: 'Vasya', id: 2 },
    { name: 'Lesha', id: 3 },
    { name: 'Petya', id: 4 }
]

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT: {
            const newChat = {
                name: action.payload.chatName,
                id: +Date.now()
            }

            return [...state, newChat]
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
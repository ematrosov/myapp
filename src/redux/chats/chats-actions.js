export const ADD_CHAT = "CHATS::ADD_CHAT"
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT"

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatName
    }
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: {
        chatId
    }
})
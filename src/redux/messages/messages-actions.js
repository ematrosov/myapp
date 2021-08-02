export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"

export const addMessageToStore = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        message
    }
})

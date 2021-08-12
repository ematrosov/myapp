export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"

export const addMessageToStore = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        message
    }
})
export const addMessageWithThunk = (message) => (dispatch, getState) => {
    dispatch(addMessageToStore(message))

    if (message.currentUser) {
        const messageFromRobot = {
            id: +Date.now(),
            chatId: message.chatId,
            currentUser: false,
            text: 'Это пишет тебе на самом деле не робот!'
        }
        setTimeout(() => dispatch(addMessageToStore(messageFromRobot)), 1500)
    }
}
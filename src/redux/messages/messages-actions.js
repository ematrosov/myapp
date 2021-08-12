import firebase from "firebase";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"

export const addMessageToStore = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        message
    }
})
export const addMessageToDb = (chatId, message) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref("messages").child('chatId_' + chatId).push(message)

            if (message.currentUser) {
                const messageFromRobot = {
                    currentUser: false,
                    text: 'Это пишет тебе не бот!'
                }
                setTimeout(async () => {
                    await firebase.database().ref("messages").child('chatId_' + chatId).push(messageFromRobot)
                }, 1500)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const initMessageTracking = (chatId) => {
    return (dispatch) => {
        firebase.database().ref("messages").child('chatId_' + chatId).on("child_added", (snapshot) => {
            console.log("Init message")
            console.log(snapshot.val())
            const msg = {
                id: snapshot.key,
                chatId: chatId,
                currentUser: snapshot.val().currentUser,
                text: snapshot.val().text
            }
            dispatch(addMessageToStore(msg))
        })
    }
}
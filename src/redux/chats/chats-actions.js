export const ADD_CHAT = "CHATS::ADD_CHAT"
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT"

export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: {
        chat
    }
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: {
        chatId
    }
})

export const initChatsTracking = () => {
    return (dispatch) => {
        firebase.database().ref("chats").on("child_added", (snapshot) => {
            const chat = {
                id: snapshot.key,
                name: snapshot.val()
            }
            dispatch(addChat(chat))
        })

        firebase.database().ref("chats").on("child_removed", (snapshot) => {
            console.log("child_removed")
            dispatch(removeChat(snapshot.key))
        })
    }
}

export const addChatToDb = (chatName) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref("chats").push(chatName)
        } catch (error) {
            console.error(error)
        }
    }
}

export const removeChatFromDb = (chatId) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref("chats").child(chatId).remove()
        } catch (error) {
            console.error(error)
        }
    }
}
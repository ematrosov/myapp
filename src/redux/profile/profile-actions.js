export const CHANGE_STATUS = "PROFILE::CHANGE_STATUS"
export const CHANGE_NAME = "PROFILE::CHANGE_NAME"
export const LOGIN = "PROFILE::LOGIN"
export const LOGOUT = "PROFILE::LOGOUT"

export const changeStatus = (status) => ({
    type: CHANGE_STATUS,
    payload: {
        status
    }
})

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name
    }
})

export const loggedIn = () => ({
    type: LOGIN
})

export const loggedOut = () => ({
    type: LOGOUT
})

export const registration = (email, password) => {
    return async (dispath, getState) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(loggedIn())
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const initAuthStateTracking = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(loggedIn())
            } else {
                dispatch(loggedOut())
            }
        })
    }
}
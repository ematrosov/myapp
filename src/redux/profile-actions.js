export const CHANGE_STATUS = "PROFILE::CHANGE_STATUS"
export const CHANGE_NAME = "PROFILE::CHANGE_NAME"

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
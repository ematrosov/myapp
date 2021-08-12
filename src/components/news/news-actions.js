const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles'
export const SET_NEWS_LIST = 'NEWS::SET_LIST'
export const SET_IDLE_STATUS = 'NEWS::SET_IDLE_STATUS'
export const SET_LOADING_STATUS = 'NEWS::SET_LOADING_STATUS'
export const SET_ERROR_STATUS = 'NEWS::SET_ERROR_STATUS'
export const CLEAR_DATA = 'NEWS::CLEAR_DATA'

export const STATUS_IDLE = 'idle'
export const STATUS_LOADING = 'loading'
export const STATUS_ERROR = 'error'

export const setNewsList = (news) => ({
    type: SET_NEWS_LIST,
    payload: {
        news
    }
})

export const fetchNews = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus())

        fetch(API_URL)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    throw Error('Load data failed')
                }
                return response.json()
            })
            .then((data) => {
                dispatch(setNewsList(data))
                dispatch(setIdleStatus())
            })
            .catch((error) => {
                console.error(error)
                dispatch(setErrorStatus())
            })

    }
}

export const setIdleStatus = () => ({
    type: SET_IDLE_STATUS
})

export const setLoadingStatus = () => ({
    type: SET_LOADING_STATUS
})

export const setErrorStatus = () => ({
    type: SET_ERROR_STATUS
})

export const clearData = () => ({
    type: CLEAR_DATA
})
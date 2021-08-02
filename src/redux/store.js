import { combineReducers, createStore } from "redux";
import profileReducer from "./profile/profile-reducer";
import chatsReducer from "./chats/chats-reducer";
import messagesReducer from "./messages/messages-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
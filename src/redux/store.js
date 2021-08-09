import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profile/profile-reducer";
import chatsReducer from "./chats/chats-reducer";
import messagesReducer from "./messages/messages-reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import newsReducer from "./news/news-reducer";

const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,

    messages: messagesReducer,
    news: newsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)


export const persistor = persistStore(store)



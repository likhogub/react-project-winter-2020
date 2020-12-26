import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js"
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
persistStore(store)

export {store}
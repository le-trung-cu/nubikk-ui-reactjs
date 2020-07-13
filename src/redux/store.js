import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);


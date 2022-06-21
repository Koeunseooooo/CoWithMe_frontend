import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import counter from './counter';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['counter'],
};

const rootReducer = combineReducers({
    counter
});

export default persistReducer(persistConfig, rootReducer);

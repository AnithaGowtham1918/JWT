import { userReducer } from "./store/reducer/userReducer";
import { blogReducer } from "./store/reducer/blogreducer";
//import { createStore } from 'redux';
import {combineReducers, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist:['blogdata']
  }
const rootReducer = combineReducers({
    blogdata:blogReducer,
    loginuser:userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store =createStore(persistedReducer,
    composeWithDevTools(),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
    
);

export let persistor = persistStore(store)

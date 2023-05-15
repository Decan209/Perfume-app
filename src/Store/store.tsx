import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import useSlice from "../pages/Customeraccount/featurnes/useSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';




const persistConfig = {
    key: "persist-key",
    version :1,
    storage,
  }


const user = persistReducer(persistConfig, useSlice)

const store = configureStore({
    reducer: {
        user,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    });

export const persistor = persistStore(store)
export default store
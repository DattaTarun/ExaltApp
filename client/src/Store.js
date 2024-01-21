import Cartreducer from "./Cartreducer";
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 

//const stripe = require("stripe")('sk_test_51NTiVHSBfN5I5yfEtBUGiXYa6e6oHQGCMxnIaiG6ndMvDikZE2MLpb0WINdq8qzarzhkhGS386XO2tztgR4IKcJT008BDG9hal');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, Cartreducer)

export const store = configureStore({
  reducer:{
    cart:persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)




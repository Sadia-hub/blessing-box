//import rootReducer from "../../../reducers/index";
import rootReducer from ".";
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'counter',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// export function makeStore() {
//      return configureStore({
//       reducer:   rootReducer ,
//      }

//     )
//   }

  const store = configureStore({reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
  })
 //export const persistor = persistStore(store)
  export default store;
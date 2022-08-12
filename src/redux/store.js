// import rootReducer from ".";
// import { configureStore } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage';

// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'counter',
//   storage,
//   keyPrefix: ''
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// // export function makeStore() {
// //      return configureStore({
// //       reducer:   rootReducer ,
// //      }

// //     )
// //   }

//   const store = configureStore({reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
  
//   })
 
//   export default store;

import rootReducer from ".";
import { configureStore } from '@reduxjs/toolkit'

export function makeStore() {
     return configureStore({
      reducer:   rootReducer ,
     }

    )
  }
 const store = makeStore();
 export default store;
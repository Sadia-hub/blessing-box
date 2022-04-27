// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "../../../reducers/index";
// import { createWrapper } from "next-redux-wrapper";
// export function makeStore() {
//      return configureStore({ reducer : rootReducer,  }

//       )
//   }

// const store = makeStore();

// export const wrapper = createWrapper(makeStore);
// export default store;


import rootReducer from "../../../reducers/index";

import { configureStore } from '@reduxjs/toolkit'

export function makeStore() {
     return configureStore({
      reducer:   rootReducer ,
     }

    )
  }
 const store = makeStore();
// const store = createStore(rootReducer);
export default store;
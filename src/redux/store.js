//import rootReducer from "../../../reducers/index";
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
import  loginReducer  from "./loginReducer";
import userTypeReducer from "./userTypeReducer";
import userNameReducer from "./userNameReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer,
    userTypeReducer,
    userNameReducer
});

export default rootReducer;
import loginReducer from "./user/loginReducer";
import userReducer from "./user/userReducer";
import detailsReducer from "./ngo/detailsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer,
    userReducer,
    detailsReducer
});

export default rootReducer;
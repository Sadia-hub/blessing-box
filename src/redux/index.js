import loginReducer from "./user/loginReducer";
import userReducer from "./user/userReducer";
import pendingNgosReducer from "./ngo/pendingNgosReducer";
import detailsReducer from "./ngo/detailsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer,
    userReducer,
    detailsReducer,
    pendingNgosReducer
});

export default rootReducer;
import loginReducer from "./user/loginReducer";
import userReducer from "./user/userReducer";
import pendingNgosReducer from "./ngo/pendingNgosReducer";
import detailsReducer from "./ngo/detailsReducer";
import contactReducer from "./contact/contactReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loginReducer,
    userReducer,
    detailsReducer,
    pendingNgosReducer,
    contactReducer,
});

export default rootReducer;
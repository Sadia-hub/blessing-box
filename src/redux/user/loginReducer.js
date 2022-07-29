//import { IS_LOGIN, IS_LOGOUT } from "./types";
export const initialState = false;

const loginReducer = (state=initialState, action) => {
   
    switch(action.type){
        case "IS_LOGIN":  return state =true;
        case "IS_LOGOUT": return state = false;
        default: return state;
    }
}
export default loginReducer;
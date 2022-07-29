// import { SET_USER_INFO } from "./types"

const initialState = {
}
//...state

const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case "SET_USER_INFO":
            return state = action.payload;
            //return {...state, user:action.payload}
        default:
            return state;
    }
}

export default userReducer;
// import { SET_USER_INFO } from "./types"

const initialState = {}


const pendingNgosReducer = (state=initialState, action) =>{
   
    switch(action.type){
        case "GET_PENDING_NGO":
            return state = action.payload;
        default:
            return state;
    }
}

export default pendingNgosReducer;
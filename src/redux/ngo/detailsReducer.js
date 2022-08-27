import { SET_USER_INFO, SET_NGO_BY_USER_ID , SET_PROOFS} from "./types"

const initialState = {
    ngo:{},
    proofs:[]
}
//...state

const detailsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "SET_NGO_INFO":
            console.log("action",action.payload)
           const updatedState={...state,
                orphange:action.payload.orphange,
                food:action.payload.food,
                education:action.payload.education
            };
            console.log("In redux state is ",updatedState)
            return updatedState;
        case SET_NGO_BY_USER_ID:
            return {...state, ngo:action.payload}
        case SET_PROOFS:
            return {...state, proofs:action.payload}

        
        default:
            return state;
    }
}

export default detailsReducer;
export const initialState = null;
const userNameReducer = (state=initialState, action) => {  
    switch(action.type){
        case "userName":  return action.payload;        
        default: return state;
    }

}
export default userNameReducer;
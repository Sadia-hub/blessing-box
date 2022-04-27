export const initialState = null;
const userTypeReducer = (state=initialState, action) => {  
    switch(action.type){
        case "userType":  return action.payload;        
        default: return state;
    }

}
export default userTypeReducer;
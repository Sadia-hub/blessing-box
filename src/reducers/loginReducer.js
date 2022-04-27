export const initialState = false;
const loginReducer = (state=initialState, action) => {
   
    switch(action.type){
        case "isLogin":  return state =true;
        case "isLogout": return state = false;
        default: return state;
    }

}
export default loginReducer;
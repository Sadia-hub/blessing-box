const initialState = {
}

const contactReducer = (state=initialState, action) =>{
    switch(action.type){
        case "SET_CONTACT_INFO":
            return state =  action.payload;
        default:
            return state;
    }
}

export default contactReducer;
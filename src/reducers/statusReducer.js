export const initialState = "pending";

export const statusReducer = (state=initialState, action) => {
    
    switch(action.type){
        case "APPROVED": return state ="approved";
        case "REJECTED": return state ="rejected";
        case "PENDING": return state ="pending";
        default: return state;
    }

}
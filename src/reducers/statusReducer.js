export const initialStatus = "pending";

export const statusreducer = (status, action) => {
    // if(action.type==="approved"){
    //     return action.payload;
    // }

    // if(action.type==="rejected"){

    //     return action.payload;
    // }

    if(action.type==="pending"){
        return action.payload;
    }
  
    return status;
}
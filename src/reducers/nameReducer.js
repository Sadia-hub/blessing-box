export const initialStatename = null;

export const reducername = (name, action) => {
    if(action.type==="USERNAME"){

        return action.payload;
    }
  
    return name;
}
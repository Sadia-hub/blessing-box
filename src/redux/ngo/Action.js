import {  SET_NGO_INFO } from "./types";

export const setNGOInfo = (userData) =>{
    return {
        type:SET_NGO_INFO,
        payload:userData
    }
}




import {  SET_NGO_INFO, GET_PENDING_NGO } from "./types";

export const setNGOInfo = (userData) =>{
    return {
        type:SET_NGO_INFO,
        payload:userData
    }
}

export const getPendingNgo = (userData) =>{
    return {
        type:GET_PENDING_NGO,
        payload:userData
    }
}




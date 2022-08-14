import {  SET_NGO_INFO, GET_PENDING_NGO, SET_NGO_BY_USER_ID, SET_PROOFS } from "./types";

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

export const setNgoByUserId = (ngoData) =>{
    return {
        type:SET_NGO_BY_USER_ID,
        payload:ngoData
    }
}

export const setProofs = (proofs) =>{
    return {
        type:SET_PROOFS,
        payload:proofs
    }
}






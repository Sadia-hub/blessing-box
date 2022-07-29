import { SET_FOOD_INFO, SET_Orphange_INFO, SET_Education_INFO, SET_NGO_INFO } from "./types";

export const setNGOInfo = (userData) =>{
    return {
        type:SET_NGO_INFO,
        payload:userData
    }
}

export const setFoodInfo = (userData) =>{
    return {
        type:SET_FOOD_INFO,
        payload:userData
    }
}


export const setOrphangeInfo = (userData) =>{
    return {
        type:SET_Orphange_INFO,
        payload:userData
    }
}

export const setEducationInfo = (userData) =>{
    return {
        type:SET_Education_INFO,
        payload:userData
    }
}
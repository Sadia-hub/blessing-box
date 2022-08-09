import { SET_CONTACT_INFO } from "./types";

export const setContactInfo = (userData) =>{
    return {
        type:SET_CONTACT_INFO,
        payload:userData
    }
}
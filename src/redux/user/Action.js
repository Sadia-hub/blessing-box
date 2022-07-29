import { IS_LOGIN, SET_USER_INFO, IS_LOGOUT } from "./types"


export const isLogin = () => {
    return {
        type: IS_LOGIN,
    }
}

export const isLogout = () => {
    return {
        type: IS_LOGOUT
    }
}

export const setUserInfo = (userData) =>{
    return {
        type:SET_USER_INFO,
        payload:userData
    }
}

// export const userType =(type) =>{
//     return {
//         type: "userType",
//         payload: type   
//     }
// }

// export const userName =(name) =>{
//     return {
//         type: "userName",
//         payload: name  
//     }
// }



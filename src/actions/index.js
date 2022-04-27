export const isLogin = () => {
    return {
        type: "isLogin"
    }
}

export const isLogout = () => {
    return {
        type: "isLogout"
    }
}

export const userType =(type) =>{
    return {
        type: "userType",
        payload: type   
    }
}

export const userName =(name) =>{
    return {
        type: "userName",
        payload: name  
    }
}



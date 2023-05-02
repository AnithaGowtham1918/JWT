export const LoginStart=(value)=>{
    return{
        type:"LOGIN_START"
    }
};
export const LoginSuccess=(userD)=>{
    return{
        type:"LOGIN_SUCCESS",
        payload:userD,

    }
};
export const LoginFailure=()=>{
    return{
        type:"LOGIN_FAILURE",

    }
};
export const loginUser=(value)=>{
    console.log(value);
    return{
        type:"USER_DATA",
        payload:value,
    };
};
export const LogOut=()=>{
    return{
        type:"LOG_OUT",
    }
    
};
export const addUpdateData=(data)=>{
    return{
        type:"UPDATE_USER",
        payload:data,
    }
};
const initialState={
        user:null,
        isFetching:false,
        error:false
   
};
console.log(initialState);
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "USER_DATA":
            return{
                ...state.user,
                user:action.payload,
            };  
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false
            };  
        case "LOGIN_SUCCESS":
                return{
                    user:action.payload,
                    isFetching:false,
                    error:false
                };  
        case "LOGIN_FAILURE":
                    return{
                        user:null,
                        isFetching:false,
                        error:true
                    };     
        case "LOG_OUT":
            return{
                user:null,
                isFetching:false,
                error:false
            };                          
        default:
            return state;                                    

        }
};
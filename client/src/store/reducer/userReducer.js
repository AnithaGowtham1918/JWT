const initialState={
    user:[],
};
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "USER_DATA":
            return{
                ...state.user,
                user:action.payload,
            }  
            default:
            return state;                                    

        }
};
const initialState={
    blog:[],
}
export const blogReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return{
                ...state.blog,
                blog:action.payload,
            };
            default:
                return state;
    }


}

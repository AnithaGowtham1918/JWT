const initialState={
    blog:[],
    singleBlog:[],
}
export const blogReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return{
                ...state.blog,
                blog:action.payload,
            };
        case "PERSONAL_BLOG":
            return{
                ...state.singleBlog,
                singleBlog:action.payload,
            }
    
            default:
                return state;
    }


}

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
        case "PERSONAL_BLOG":
            return{
                ...state.singleBlog,
                singleBlog:action.payload,
            }
        case "DELETE_BLOG":
            const filter = state.blog.filter((blog,index)=>{
                return index!==action.id;
            })
            return{
           blog:[...filter],
            }    
        case "UPDATE_POST":
                return{
                    ...state.blog,
                    blog:action.payload,
                }
            default:
                return state;
    }


}

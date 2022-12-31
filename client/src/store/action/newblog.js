export const addBlog=(blog)=>{
    return{
        type:"ADD_BLOG",
        payload:blog,
    };
}
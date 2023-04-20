export const addBlog=(blog)=>{
    return{
        type:"ADD_BLOG",
        payload:blog,
    };
};
export const deleteBlog=(id)=>{
    return{
        type:"DELETE_BLOG",
        
    }
};
export const personalBlog=(blog)=>{
    return{
        type:"PERSONAL_BLOG",
        payload:blog,
    }
}
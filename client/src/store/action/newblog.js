
export const addBlog=(blog)=>{
    return{
        type:"ADD_BLOG",
        payload:blog,
    };
};
export const personalBlog=(blog)=>{
    return{
        type:"PERSONAL_BLOG",
        payload:blog,
    }
};
export const addUpdateData=(data)=>{
    return{
        type:"UPDATE_POST",
        payload:data,
    }
}
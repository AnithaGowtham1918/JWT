import axios from "axios";
export const addBlog=(blog)=>{
    return{
        type:"ADD_BLOG",
        payload:blog,
    };
};
export const deleteBlog=async(id,index)=>{
    
    await axios.delete(`http://localhost:4000/blog/deleteblog/${id}`);
    return{
        type:"DELETE_BLOG",
        id:index,
        
        
    }
};
export const personalBlog=(blog)=>{
    return{
        type:"PERSONAL_BLOG",
        payload:blog,
    }
}
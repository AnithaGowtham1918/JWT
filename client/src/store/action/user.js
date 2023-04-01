export const loginUser=(value)=>{
    console.log(value);
    return{
        type:"USER_DATA",
        payload:value,
    };
};
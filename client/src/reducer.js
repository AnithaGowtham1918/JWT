import { combineReducers } from "redux";
import { userReducer } from "./store/reducer/userReducer";
import { blogReducer } from "./store/reducer/blogreducer";
export default combineReducers({
    blogdata:blogReducer,
    loginuser:userReducer
});
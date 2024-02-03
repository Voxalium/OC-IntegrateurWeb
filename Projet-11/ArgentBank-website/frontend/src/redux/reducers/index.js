import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import loginReducer from "./login.reducer";
export default combineReducers({
    userReducer,
    loginReducer,
});

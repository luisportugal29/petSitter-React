import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import sitterReducer from "./sitterReducer";

export default combineReducers({
    auth: authReducer,
    search: searchReducer,
    sitters: sitterReducer,
});


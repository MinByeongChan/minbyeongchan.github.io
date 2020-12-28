import { combineReducers } from "redux";
import tabReducer from "./tabReducer";

const rootReducer = combineReducers({ tabReducer });

export default rootReducer;
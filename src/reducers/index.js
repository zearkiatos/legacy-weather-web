import { combineReducers } from "redux";
import weatherReducers from "./weatherReducers";

const rootReducer = combineReducers({
    weather: weatherReducers
});

export default rootReducer;
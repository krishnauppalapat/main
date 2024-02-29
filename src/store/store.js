import counterReducer from "./reducers/counter.reducer";
import { createStore } from "redux";
var store=createStore(
    counterReducer
)
export default store;
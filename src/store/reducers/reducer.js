import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import { combineReducers} from "redux";
var reducer=combineReducers ({
    counter:counterReducer,
    todos:todoReducer
})
export default reducer;
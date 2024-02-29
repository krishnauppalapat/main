import counterReducer from "./counter.reducer";
import productsReducer from "./products.reducer";
import todoReducer from "./todo.reducer";
import { combineReducers} from "redux";
var reducer=combineReducers ({
    counter:counterReducer,
    todos:todoReducer,
    prod:productsReducer
})
export default reducer;
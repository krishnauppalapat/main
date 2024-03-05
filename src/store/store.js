import { createStore } from "redux";
import todoListReducer from "./reducer/todoList.reducer";
const store=createStore(todoListReducer);
export default store;
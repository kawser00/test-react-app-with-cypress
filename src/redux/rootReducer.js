import { combineReducers } from "redux";
import todoReducers from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducers,
})

export default rootReducer;
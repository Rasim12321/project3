import { combineReducers } from "redux";
import { TodoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todos: TodoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
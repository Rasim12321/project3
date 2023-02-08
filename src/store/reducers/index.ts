import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";
import { CountriesReducer } from "./countiesReducer";
import { TodoReducer } from "./todoReducer";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    todos: TodoReducer,
    countries: CountriesReducer,
    cart: CartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
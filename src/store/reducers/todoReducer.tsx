import { Goods } from "../../goods";
import { TodoAction, TodoActionsTypes, TodoState } from "../../types/todos";

const initialState: TodoState = {
    goods: Goods,
    loading: false,
    error: null,
    page: 0,
}

export const TodoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionsTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}
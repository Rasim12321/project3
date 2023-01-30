import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction, TodoActionsTypes } from "../../types/todos"

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })

            dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: TodoActionsTypes.FETCH_TODOS_ERROR, payload: 'Error!'})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}
import { TodoAction, TodoActionsTypes } from "../../types/todos"


export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}

export interface TodoState {
    goods: any[],
    loading: boolean,
    error: null | string,
    page: number,
}

export enum TodoActionsTypes{
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}


interface SetTodoPage {
    type : TodoActionsTypes.SET_TODO_PAGE
    payload : number
}

export type TodoAction = SetTodoPage
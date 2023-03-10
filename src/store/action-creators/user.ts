import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/users"

export const fetchUsers = (data: any) => {

    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'error!'})
        }
    }
}
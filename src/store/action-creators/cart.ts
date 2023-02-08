import { Dispatch } from "redux"
import { CartAction, CartActionsTypes, CartState } from "../../types/cart"

export const CartAdd = (goods:CartState) => {

    return async (dispatch: Dispatch<CartAction> ) => {
        const good = {
            id: goods.id,
            name: goods.name,
            price: goods.price,
            url: goods.url,
            count: 1
        }
        dispatch({type: CartActionsTypes.GOODS_ADD, payload: good})

    }
}

export const CartAddCount = (id: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({type: CartActionsTypes.GOODS_ADD_COUNT, payload: id-1})
    }
}
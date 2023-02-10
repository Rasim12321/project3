import { Dispatch } from "redux"
import { CartAction, CartActionsTypes, CartState } from "../../types/cart"

export const CartAdd = (goods:CartState) => {
    console.log(goods.id)
    return (dispatch: Dispatch<CartAction> ) => {
        console.log(goods.id)
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
    // console.log(id)
    return (dispatch: Dispatch<CartAction>) => {
        // console.log(id)
        dispatch({type: CartActionsTypes.GOODS_ADD_COUNT, payload: id})
    }
}

export const CartMinCount = (id: number) => {
    // console.log(id)
    return (dispatch: Dispatch<CartAction>) => {
            // console.log(id)
        dispatch({type: CartActionsTypes.GOODS_MIN, payload: id})
    }
}

export const CartDel = (id: number) => {
    console.log(id)
    return (dispatch: Dispatch<CartAction>) => {
            console.log(id)
        dispatch({type: CartActionsTypes.GOODS_DEL, payload: id})
    }
}
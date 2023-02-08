import { CartAction, CartActionsTypes, CartSt, CartState } from "../../types/cart"


const initialState: CartSt = []

export const CartReducer = (state: CartSt = initialState, action: CartAction): CartSt => {
    switch (action.type){
        case CartActionsTypes.GOODS_ADD:
            return [...state, action.payload]
        case CartActionsTypes.GOODS_ADD_COUNT:
            state[action.payload-1].count += 1
            return state
        case CartActionsTypes.GOODS_MIN:
            // return {...state, cart: action.payload}
        case CartActionsTypes.GOODS_DEL:
            // return {...state, cart: action.payload}
        default:
            return state
    }
}
import { CartAction, CartActionsTypes, CartSt, CartState } from "../../types/cart"


const initialState: CartSt = []

export const CartReducer = (state: CartSt = initialState, action: CartAction): CartSt => {
    switch (action.type){
        case CartActionsTypes.GOODS_ADD:
            return [...state, action.payload]
        case CartActionsTypes.GOODS_ADD_COUNT:
            state.map(item => item.id == action.payload ?
                (item.count += 1 ):
                null
                )
            return [...state]
        case CartActionsTypes.GOODS_MIN:
            // console.log(action.payload)
            state.map(item => item.id == action.payload ?
                (item.count -= 1, console.log(item)) :
                null
                )
            state.map(item => item.id == action.payload ?
                                // @ts-ignore
                (item.count === 0 ? state.splice(state.indexOf(item),1) : null) :
                item)
            return [...state]
        case CartActionsTypes.GOODS_DEL:
            console.log(action.payload)
            state.length === 1 ? state = [] :
            state.map(item => item.id == action.payload ?
                // @ts-ignore
                (state.splice(state.indexOf(item),1) , console.log(item) ):
                item
                )
            return [...state]
        default:
            return state
    }
}
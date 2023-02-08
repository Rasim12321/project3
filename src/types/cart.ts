export interface CartState {
    id: number,
    name: string,
    price: number,
    url: string,
    count: number
}

export type CartSt = [] | CartState[]


export enum CartActionsTypes {
    GOODS_ADD= 'GOODS_ADD',
    GOODS_ADD_COUNT= 'GOODS_ADD_COUNT',
    GOODS_MIN= 'GOODS_MIN',
    GOODS_DEL = 'GOODS_DEL',
}
interface CartAddActions {
    type: CartActionsTypes.GOODS_ADD ;
    payload: CartState;
}
interface CartAddCountActions {
    type: CartActionsTypes.GOODS_ADD_COUNT;
    payload: number;
}
interface CartMinActions {
    type: CartActionsTypes.GOODS_MIN;
    payload: number;
}
interface CartDelActions {
    type: CartActionsTypes.GOODS_DEL;
    payload: number;
}



export type CartAction =  CartDelActions | CartMinActions | CartAddActions | CartAddCountActions

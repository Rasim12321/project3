import React, {FC} from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UseActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import '../styles/Cart.css'

const CartPage: FC = () => {
    const navigate = useNavigate()
    // const {users} = useTypedSelector(state => state.user)

    const cart = useTypedSelector(state => state.cart)
    console.log(cart)

    const {CartAddCount} = UseActions()
    const {CartMinCount} = UseActions()
    const {CartDel} = UseActions()
    let m = cart
    let total:number = 0
    cart.map((good) => total += good.price*good.count)
    console.log(cart)



    return(
        <>
            {cart.length === 0 ?
            <Alert className="w-50 m-auto border-dark bg-dark text-center text-white fs-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >Корзина пуста!
            <button className="button fs-5 text-white w-auto bg-dark mt-2 p-2" onClick={() => navigate('/')}>Перейти в магазин</button></Alert> :
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>img</th>
                        <th>count</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(good => (
                        <tr key={good.id}>
                            <td>{good.name}</td>
                            <td><img className="img" src={good.url} alt="" /></td>
                            <td>{good.count}</td>
                            <td>{good.price * good.count}</td>
                            <td className="flex">
                                <td><button className="buttonCart" value={`${good.id}`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => (console.log(good.id), CartAddCount(+e.currentTarget.value))}><span>+</span></button></td>
                                <td><button className="buttonCart" value={`${good.id}`} onClick={async (e: React.MouseEvent<HTMLButtonElement>) => await CartMinCount(+e.currentTarget.value)}>-</button></td>
                                <td><button className="buttonCart" value={`${good.id}`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => CartDel(+e.currentTarget.value)}>X</button></td>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="tfoot flex">
                    <tr className="flex">
                        <td className="d-block"><b> Total:</b>  </td>
                        <td className="d-block"><b>{total}</b></td>
                    </tr>

                </tfoot>
            </table>
            <button className="button" onClick={() => navigate('/success')}>Заказать</button>
            </>
        }
        </>
    )
}

export default CartPage
import { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CartState } from "../types/cart";


const CartPage: FC = () => {
    const {users} = useTypedSelector(state => state.user)
    console.log(users)

    const cart = useTypedSelector(state => state.cart)
    // const [state, setState] = useState<CartState>(cart)

    useEffect(() => {
        console.log(cart)

    })

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>img</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(good => (
                        <tr key={good.id}>
                            <td>{good.name}</td>
                            <td><img src={good.url} alt="" /></td>
                            <td>{good.price}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </>
    )
}

export default CartPage
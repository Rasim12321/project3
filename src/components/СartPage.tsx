import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";


const CartPage: FC = () => {
    const {users} = useTypedSelector(state => state.user)
    console.log(users)
    return(
        <>
            3
        </>
    )
}

export default CartPage
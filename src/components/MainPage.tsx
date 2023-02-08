import { FC, useRef, useState } from "react";
import { UseActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CartAddCount } from "../store/action-creators/cart";

import '../styles/Main.css'

const MainPage: FC = () => {
    const {page, goods} = useTypedSelector(state => state.todos)
    const pages = [1,2,3,4,5]
    const AddRef = useRef<HTMLButtonElement>(null)
    const [description, setDescription] = useState<boolean>(false)
    const cart = useTypedSelector(state => state.cart)

    const {setTodoPage} = UseActions()
    const {CartAdd} = UseActions()

    const addHandler = () => {
        const num = AddRef.current?.id
        const arr: number[] = []
        cart.map(good => arr.push(good.id) )
                                        // @ts-ignore
        if (arr.includes(goods[num].id)){
                                        // @ts-ignore
            CartAddCount(num)
        }
        else {
                                        // @ts-ignore
            CartAdd(goods[num])
        }
        console.log(cart)

    }

    return(
        <>

                <div className="good">

                    <div key={goods[page-1].id}>
                        <img src={goods[page-1].url} alt="" />
                        <div className="main-center" ><h3>{goods[page-1].name}</h3></div>
                        <div className="main-center">{goods[page-1].price}p</div>
                        <div className="flex m-1">
                            <button className="button" ref={AddRef} id={`${page-1}`} onClick={addHandler}>add</button>
                            <button className="button" id={`${page-1}`} onClick={() => setDescription(prev=>!prev)}>description</button>
                        </div>
                    </div>

                    {description ? (<div className='description'>{goods[page-1].description}</div>)  : null}

                    <div  style={{display: 'flex'}}>
                        {pages.map(p =>
                            <div key={p} className='pages' onClick={() =>  (setTodoPage(p), setDescription(false))} style={{border:p === page ? '6px solid aliceblue' : '2px solid aliceblue', padding: 10}}>
                                {p}
                            </div>)}
                    </div>
                </div>
        </>
    )
}

export default MainPage
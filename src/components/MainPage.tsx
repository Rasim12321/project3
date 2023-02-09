import React, { FC, useState } from "react";
import { UseActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Description from "./Description";
import '../styles/Main.css'

const MainPage: FC = () => {
    const {page, goods} = useTypedSelector(state => state.todos)
    const pages = [0,1,2,3,4]
    const [description, setDescription] = useState<boolean>(false)
    const cart = useTypedSelector(state => state.cart)

    const {setTodoPage} = UseActions()
    const {CartAdd} = UseActions()
    const {CartAddCount} = UseActions()

    const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const num = e.currentTarget.id
        // console.log(num)
        const arr: any = new Set()
        cart.map(good => arr.add(good.id) )
        console.log(arr, num)

            // @ts-ignore
        if (!Array.from(arr).includes(goods[num].id-1)){
            // console.log(arr)
            // @ts-ignore
            CartAdd(goods[num])
        }
        else {
            // console.log(11)
            // @ts-ignore

            CartAddCount(num)
        }
    }
    console.log(cart)


    return(
        <>

                <div className="good">
                    <div className="flex">
                    <div key={goods[page].id}>
                        <img src={goods[page].url} alt="" />
                        <div className="main-center" ><h3>{goods[page].name}</h3></div>
                        <div className="main-center">{goods[page].price}p</div>
                        <div className="flex m-1">
                            {/* <button className="button" id={`${page}`} onClick={() => setDescription(prev=>!prev)}>description</button> */}
                        </div>
                    </div>
                    <button className="button add" id={`${page}`} onClick={addHandler}>add
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-1 bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    </button>
                    </div>
                    <Description/>

                    {/* {description ? (<div className='description'>{goods[page].description}</div>)  : null} */}

                    <div  style={{display: 'flex'}}>
                        {pages.map(p =>
                            <div key={p-1} className='pages' onClick={() =>  (setTodoPage(p), setDescription(false))} style={{border:p === page ? '6px solid aliceblue' : '2px solid aliceblue', padding: 10}}>
                                {p+1}
                            </div>)}
                    </div>
                </div>
        </>
    )
}

export default MainPage
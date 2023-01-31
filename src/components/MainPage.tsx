import { FC } from "react";
import { UseActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import '../styles/Main.css'

const MainPage: FC = () => {
    const {page, goods} = useTypedSelector(state => state.todos)
    const pages = [1,2,3,4,5]
    const {setTodoPage} = UseActions()
    console.log(goods)


    return(
        <>

                <div className="good">
                {
                    <div key={goods[page-1].id}>
                        <img src={goods[page-1].url} alt="" />
                        <div className="main-center" ><h3>{goods[page-1].name}</h3></div>
                        <div className="main-center">{goods[page-1].price}p</div>
                        <div className="flex m-1">
                            <button className="button" id={`${page-1}`}>add</button>
                            <button className="button" id={`${page-1}`}>del</button>
                        </div>
                    </div>
                }
                    <div  style={{display: 'flex'}}>
                        {pages.map(p =>
                            <div key={p} className='pages' onClick={() => setTodoPage(p)} style={{border:p === page ? '6px solid aliceblue' : '2px solid aliceblue', padding: 10}}>
                                {p}
                            </div>)}
                    </div>
                </div>
        </>
    )
}

export default MainPage
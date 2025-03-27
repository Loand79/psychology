import React, {useState} from "react";
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App = () => {

    const [count, setCount] = useState<number>(0)

    const increment =() => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <h1>Hello man</h1>
            <div>{count}</div>
            <button onClick={increment} className={classes.button}>go</button>
            <br/>
            <Link to={'/about'}>ABOUT</Link>
            <br/>
            <Link to={'/shop'}>SHOP</Link>
            <Outlet />
        </div>

    )
}
export default App;
import React, {useState} from "react";
import './App.css'

export const App = () => {

    const [count, setCount] = useState<number>(0)

    const increment =() => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <h1>Hello man</h1>
            <div>{count}</div>
            <button onClick={increment}>go</button>
        </div>

    )
}
export default App;
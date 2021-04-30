import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)

    return (
        <div>
            <h1>I am first Child Using Counter context</h1>
            {/* <h1>This is {props.name}</h1> */}

            <h4>Counter Value is: {counterValue[0]}</h4>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    )
}

export default Child;
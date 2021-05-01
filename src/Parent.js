import React from 'react'
import Child from './Child'
import Child2 from './Child2';
// function Parent ({theme}){
//     return (
//         <h1 style = {{
//             color: `${theme}`
//         }}>{theme}</h1>
//     );
// }

const Parent = () => {
    return(
        <div>

        <h1>I am Parent Component</h1>
        <h2>My Name is Khan</h2>
        <Child />
        <Child2 />
        {/* <Child name={props.name}/> */}
        </div>
    )
}

export default Parent;
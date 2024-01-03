import React, { useReducer } from "react";
const initialstate = 0;
function reducer(state,action){
    switch(action){
        case 'Increment':
        return state +1;
        case 'Decrement':
            return state-1;
        case 'Divide':
            return state/2;
        case 'Multiply':
            return state*2;
        default :
        return state;
    }
}
function UseReducer(){
    const[count,dispatch]= useReducer(reducer,initialstate)
    return(
        <>
            <h1>Count value: {count}</h1>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('Divide')}>Divide by 2</button>
            <button onClick={()=>dispatch('Multiply')}>Multiply by 2</button>
        </>
    )
}
export default UseReducer;

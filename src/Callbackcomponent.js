import React from "react";
 function Callbackfucntion(){
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
      };
      const memoizedIncrement = useCallback(incrementCount, [count]);

    return(
        <>
        <div>
            <p>Count: {count}</p>
            <ChildComponent onIncrement={memoizedIncrement} />
        </div>
        </>
    )
 }
 
 function ChildComponent({ onIncrement }) {
    return (
      <div>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
  }
 export default Callbackfucntion
/**
 * React Hooks
 * useState: useState is a Hook that allows you to have state variables in React Functional Components
 * useEffect: useEffect is a Hook that allows you to manage side-effects like API calls, subscriptions, timers, mutations, and more
 * useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
 */
import React, { useCallback, useMemo, useRef } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0); // adding state to functional component
    const refText = useRef(null) // adding ref to component
    useEffect(() => {
        // make api call or any side effect
        refText.current.focus();
    }, []);

    const callbackFn = useCallback((vale) => {
        console.log(value)
    },[count]);

    const memoValue = useMemo(() => {
        return 100 + count;
    }, [count])

    return <div>
        {count}
        <input ref={refText}>{memoValue}</input>
        <button onClick={callbackFn}>run call back</button>
        </div>
}

export default Hooks // use this component in react application
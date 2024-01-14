/**
 * React Hooks
 * useState: useState is a Hook that allows you to have state variables in React Functional Components
 * useEffect: useEffect is a Hook that allows you to manage side-effects like API calls, subscriptions, timers, mutations, and more
 */
import React from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0); // adding state to functional component

    useEffect(() => {
        // make api call or any side effect
        
    }, []);

    return <div>{count}</div>
}

export default Hooks // use this component in react application
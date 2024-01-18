/**
 * Props stands for properties and is being used for passing data from one component to another
 * State is a JavaScript object that stores component’s dynamic data and it enables a component to keep track of changes between renders
 */

import React, { useState } from 'react'

// count is props for child comp
const ChildComp = ({count}) => {
    return <h1>count</h1>
}

// count is state for parentcomp
const ParentComp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return <div>
        <button onClick={increment}>Increment</button>
        <ChildComp count={count}></ChildComp>
    </div>
}
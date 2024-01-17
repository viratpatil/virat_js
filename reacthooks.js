/**
 * React Hooks
 * useState: useState is a Hook that allows you to have state variables in React Functional Components
 * useEffect: useEffect is a Hook that allows you to manage side-effects like API calls, subscriptions, timers, mutations, and more
 * useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
 */
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';


const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

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

    const theme = useTheme();
    const updateTheme = useThemeUpdate();

    return <div>
        {count}
        <input ref={refText}>{memoValue}</input>
        <button onClick={callbackFn}>run call back</button>
        <button onClick={updateTheme}> Update Theme</button>
        <h3>{theme}</h3>
        <ThemeProvider>
            <ContextComp></ContextComp>
        </ThemeProvider>
            
        </div>
}

const ContextComp = () => {
    const theme = useContext(ThemeContext);
    console.log(theme)
}


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        } 
    }
    return <ThemeContext.Provider value={theme}><ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider></ThemeContext.Provider>
}

const useTheme = () => {
    useContext(ThemeContext);
}

const useThemeUpdate = () => {
    useContext(ThemeUpdateContext);
}

export default Hooks // use this component in react application
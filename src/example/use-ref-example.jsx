import React, { useState, useRef } from 'react';

export const UseRefToAccessDOM = () => {
    const ref = useRef(null);

    // ref.current
    const handleClick = () => {
        console.log(ref.current.value);
        ref.current.focus();
    }

    return (
        <div>
            <input ref={ref} />
            <button onClick={handleClick}>btn</button>
        </div>
    )
}

export const UseRefToStoreTimerID = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null); // store interval ID

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}
import React, {useState, useEffect} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(5);
    function handleMinus() {
        setCount(count-1);
    }

    const shouldRender = count !==7;



    useEffect(() => {
        console.log('This line should only be executed for 1 time -> componentDidMount');

        return () => {
            console.log('This is CLEAN UP FUNCTION -> componentWillUnmount');
        };
    }, []);

    useEffect(() => {
        console.log('This line should execute when count change -> componentDidUpdate');
    }, [count]);


    if(shouldRender === false) {
        return null;
    }


    return (
        <div>
            <button onClick={handleMinus}>-</button>
            Counter: {count}
            <button onClick={() => {setCount(count+1)}}>+</button>
        </div>
    );
};


export const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prev => prev+1);
        }, 1000)

        return () => {
            console.log('Clean up function');
            clearInterval(intervalId);
        }
    }, [count]);

    return (
        <div>count: {count}</div>
    );
}

export const Wrapper = () => {
    const [shouldRender, setShouldRender] = useState(true);

    return (
        <div>
            <button onClick={() => setShouldRender(prev => !prev)}>button</button>
            {shouldRender && <Timer />}
        </div>
    )
};
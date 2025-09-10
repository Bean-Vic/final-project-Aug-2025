import {useState} from "react";


const A = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => { setCount(count + 1); };

    const handlePlusFive = () => { setCount(count + 5); };




    return (
        <>
            <B handleClick={handlePlusFive} />
            <C />
            <D />
            <E />
        </>
    )
}
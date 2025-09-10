import React, {useState, useEffect} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(5);
    function handleMinus() {
        setCount(count-1);
    }

    const shouldRender = count !==7;



    useEffect(() => {
        // console.log('This line should only be executed for 1 time -> componentDidMount');

        return () => {
            // console.log('This is CLEAN UP FUNCTION -> componentWillUnmount');
        };
    }, []);

    useEffect(() => {
        // console.log('This line should execute when count change -> componentDidUpdate');
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

export const Test = (props) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('Hello');
        setCounter(1);
    }, [props.visible, counter]);

    return <div>{counter}</div>;
};


export const Timer = () => {
    const [count, setCount] = useState(0);
    const [shouldRender, setShouldRender] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000)

        return () => {
            console.log('Clean up function');
            clearInterval(intervalId);
        }
    }, []);

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

export function Test2() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    useEffect(() => {
        console.log("副作用执行: a =", a, "b =", b, "c =", c);
    }, [a, b, c]);



    return (
        <div>
            <p>a: {a}, b: {b}, c: {c}</p>

            {/* 同时更新三个 */}
            <button
                onClick={() => {
                    setA(a + 1);
                    setB(b + 1);
                    setC(c + 1);
                }}
            >
                同时更新 a, b, c
            </button>

            {/* 分别更新 */}
            <button onClick={() => setA(a + 1)}>只更新 a</button>
            <button onClick={() => setB(b + 1)}>只更新 b</button>
            <button onClick={() => setC(c + 1)}>只更新 c</button>
        </div>
    );
}




export const RickAndMorty = () => {
    // https://rickandmortyapi.com/api/character/2
    // 1. make api request when mount
    // 2. make api request when character id updated
    // 3. render current page base on api response
    // 4. Gracefully handle error and loading
    const [characterId, setCharacterId] = useState(1);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleIncrement = () => {
        !loading && setCharacterId(characterId+1)
    }
    const handleDecrement = () => {
        if (characterId !== 1) {
            !loading && setCharacterId(1);
        }
    }
    const handleInput = (e) => {

        const targetValue = Number(e.target.value);
        console.log(targetValue);
        if (targetValue < 1) {
            setCharacterId(1);
        } else {
            setCharacterId(targetValue);
        }

    }

    useEffect(() => {
        console.log('Debug: characterId =', characterId);

        const makeApiRequest = async () => {
                setLoading(true);
              const url = `https://rickandmortyapi.com/api/character/${characterId}`;
              try {
                  const response = await fetch(url);
                  if (!response.ok) {
                      throw new Error('Could not fetch character');
                  }
                  const result = await response.json();
                  setData(result);
                  setError(null);
                  setLoading(false);
              } catch (error) {
                  setError(error);
                  console.error(error);
                  setLoading(false);
              }
        };
        makeApiRequest();

    }, [characterId]);

    return (
        <div>
            {loading ? <div>Loading...</div> : (
                <>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <span>Character id: <input type="number" value={characterId} onChange={handleInput}/></span>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    {error ? <div>Something wrong, please check your character id</div> : (
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                            <img src={data.image} alt="personal image"/>
                            <div style={{ display: 'flex', flexDirection: 'column'}}>
                                <div>Name: {data.name}</div>
                                <div>gender: {data.gender}</div>
                                <a href={data?.location?.url} >Location: {data?.location?.name}</a>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};






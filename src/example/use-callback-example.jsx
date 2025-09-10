import React, {useEffect, useState, useCallback} from 'react';

export const CallbackExample = () => {
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
            !loading && setCharacterId(characterId - 1);
        }
    }

    const handleIncrementCallback = useCallback(() => {
        !loading && setCharacterId(characterId+1)
    }, [characterId]);




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
                        <button onClick={handleIncrementCallback}>+</button>
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

// const Parent = () => {
//     const [state, setState] = useState({});
//     const [counter, setCounter] = useState(0);
//     const callback1 = () => {};
//     const callback2 = () => {};
//     const callback3 = () => {};
//     const callback4 = () => {};
//     const callback5 = () => {};
//
//     // internal parent comp logic -> which can trigger re-render
//
//     return (
//         <>
//             <C1 c1={callback1}/>
//             <C2 c2={callback2}/>
//             <C3 c3={callback3}/>
//             <C4 c4={callback4}/>
//             <C5 c5={callback5}/>
//             <div>{state}</div>
//         </>
//     )
// }

// const DATA_SOURCE = []; // assume very large
//
// const rule = '';
//
// // const filterAndSortedData = DATA_SOURCE.filter().sort();
//
//
// const filteredData = useMemo(() => {
//     return DATA_SOURCE.filter(rule);
// }, [DATA_SOURCE, rule]);
// const sortedData = filteredData.sort();
//
// const [sort, setSort] = useState('descending');// desc -> asec
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRickAndMortyCharacter, fetchRickAndMortyCharacterFail, fetchRickAndMortyCharacterSuccess } from '../actions/creators';
import { getDataSelector, getErrorSelector, getLoadingSelector } from '../reducers/index';

export const RickAndMorty = () => {
    const dispatch = useDispatch();
    const data = useSelector(getDataSelector);
    const error = useSelector(getErrorSelector);
    const loading = useSelector(getLoadingSelector);



    const [characterId, setCharacterId] = useState(1);
    // const [data, setData] = useState({});
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const makeApiRequest = () => {};
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
        const makeApiRequest = async () => {
            // setLoading(true);
            dispatch(fetchRickAndMortyCharacter());
            const url = `https://rickandmortyapi.com/api/character/${characterId}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Could not fetch character');
                }
                const result = await response.json();
                // setData(result);
                // setError(null);
                // setLoading(false);
                dispatch(fetchRickAndMortyCharacterSuccess(result));
            } catch (error) {
                // setError(error);
                // console.error(error);
                // setLoading(false);
                dispatch(fetchRickAndMortyCharacterFail(error));
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
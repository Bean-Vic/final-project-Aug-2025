import { useState } from "react";


export const useApi = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const makeApiRequest = async (characterId) => {
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

    return [{ data, error, loading }, { makeApiRequest }];

};
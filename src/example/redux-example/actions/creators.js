import { FETCH_RICK_AND_MORTY_CHARACTER, FETCH_RICK_AND_MORTY_CHARACTER_FAIL, FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS } from './types';

export const fetchRickAndMortyCharacter = () => {
    return {
        type: FETCH_RICK_AND_MORTY_CHARACTER,
    }
};

export const fetchRickAndMortyCharacterSuccess = (data) => {
    return {
        type: FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS,
        data,
    }
}

export const fetchRickAndMortyCharacterFail = (error) => {
    return {
        type: FETCH_RICK_AND_MORTY_CHARACTER_FAIL,
        error,
    }
}

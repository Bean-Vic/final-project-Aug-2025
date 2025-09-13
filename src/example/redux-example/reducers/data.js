import { FETCH_RICK_AND_MORTY_CHARACTER, FETCH_RICK_AND_MORTY_CHARACTER_FAIL, FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS } from '../actions/types';


const initialState = {};
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RICK_AND_MORTY_CHARACTER:
            return {};
        case FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS:
            return action.data;
        case FETCH_RICK_AND_MORTY_CHARACTER_FAIL:
            return {};
        default:
            return state;
    }
};

export const getData = (state) => state;
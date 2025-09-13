import { FETCH_RICK_AND_MORTY_CHARACTER, FETCH_RICK_AND_MORTY_CHARACTER_FAIL, FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS } from '../actions/types';


const initialState = null;
export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RICK_AND_MORTY_CHARACTER:
            return null;
        case FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS:
            return null;
        case FETCH_RICK_AND_MORTY_CHARACTER_FAIL:
            return action.error;
        default:
            return state;
    }
};
import { FETCH_RICK_AND_MORTY_CHARACTER, FETCH_RICK_AND_MORTY_CHARACTER_FAIL, FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS } from '../actions/types';


const initialState = false;
export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RICK_AND_MORTY_CHARACTER:
            return true;
        case FETCH_RICK_AND_MORTY_CHARACTER_SUCCESS:
            return false;
        case FETCH_RICK_AND_MORTY_CHARACTER_FAIL:
            return false;
        default:
            return state;
    }
};
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index';

const store = configureStore({
    reducer: rootReducer,
    devTools: {
        name: 'Rick and Morty Redux Store'
    }
});

export default store;
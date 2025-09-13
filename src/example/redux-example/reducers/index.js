import { dataReducer } from "./data";
import { errorReducer } from './error';
import { loadingReducer } from './loading';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
   data: dataReducer,
   error: errorReducer,
   loading: loadingReducer,
});

export const getDataSelector = (state) => state.data;
export const getErrorSelector = (state) => state.error;
export const getLoadingSelector = (state) => state.loading;


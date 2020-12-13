import { combineReducers, createStore } from 'redux';
import { DatVeReducer } from './DatVeReducer';

const rootReducer = combineReducers({
    stateVe: DatVeReducer
});

export const store = createStore(rootReducer);
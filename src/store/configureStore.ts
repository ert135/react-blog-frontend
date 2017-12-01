// ./src/store/configureStore.js
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState: any) {
    return createStore(rootReducer, initialState);
}

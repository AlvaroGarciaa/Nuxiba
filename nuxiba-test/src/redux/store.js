import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

// Crear el store de Redux
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

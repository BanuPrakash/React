import { compose, createStore } from 'redux'
import rootReducer from './reducer';

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

// middleware window.__REDUX_DEVTOOLS_EXTENSION__() --> Redux Devtools

export default store;


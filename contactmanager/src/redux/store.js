import { compose, createStore } from 'redux'
import rootReducer from './reducer';

const store = createStore(rootReducer, compose(new window.__REDUX_TOOLS_EXTENSION__()));

// middleware new window.__REDUX_TOOLS_EXTENSION__() --> Redux Devtools

export default store;


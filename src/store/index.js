import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cReducer from './reducer';
// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(cReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

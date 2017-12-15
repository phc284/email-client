import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import allReducers from './reducers/index.js'

const middleware = applyMiddleware(ReduxPromise);

export default createStore(allReducers, middleware);

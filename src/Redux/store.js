import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import news from './reducers';

// const loggerMiddleware = createLogger()

const store = createStore(
  news,
  applyMiddleware(
    thunkMiddleware
    // loggerMiddleware
  )
);

export default store;

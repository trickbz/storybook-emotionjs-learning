import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import reducer from './rootReducer';

// Middlewares
import loaderMiddleware from "./middlewares/loaderMiddleware";
import apiMiddleware from "./middlewares/apiMiddleware";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default function configureStore(initialState) {
  const middleware = [
    thunkMiddleware,
    loaderMiddleware,
    apiMiddleware
  ];

  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
}

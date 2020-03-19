import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import reducer from './rootReducer';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default function configureStore(initialState) {
  const middleware = [
    thunkMiddleware
  ];

  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
}

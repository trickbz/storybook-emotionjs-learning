import { has, isObject, isFunction } from 'lodash';

export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (has(handlers, action.type)) {
      let handler = handlers[action.type];

      if (isObject(handler) && has(handler, action.context)) {
        handler = handler[action.context];
      }

      if (isFunction(handler)) {
        return handler(state, action);
      }
    }

    return state;
  };
}

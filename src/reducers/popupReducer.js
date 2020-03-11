import { createReducer } from '../helpers/redux';

// Constants
import { SHOW_POPUP, HIDE_POPUP } from '../constants/popupConstants';

const initialState = {};

export function showPopup(state = initialState, action) {
  const { id, config } = action;

  return {
    ...state,
    [id]: {
      isOpen: true,
      config
    }
  };
}

export function hidePopup(state = initialState, action) {
  const { id } = action;
  const currentPopup = state[id] || {};

  return {
    ...state,
    [id]: {
      ...currentPopup,
      isOpen: false
    }
  };
}

const handlers = {
  [SHOW_POPUP]: showPopup,
  [HIDE_POPUP]: hidePopup
};

export default createReducer(initialState, handlers);

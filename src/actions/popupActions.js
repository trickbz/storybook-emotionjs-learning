// Constants
import { SHOW_POPUP, HIDE_POPUP } from '../constants/popupConstants';

export function showPopup(id, config) {
  return {
    type: SHOW_POPUP,
    id,
    config
  };
}

export function hidePopup(id) {
  return {
    type: HIDE_POPUP,
    id
  };
}

import { get } from 'lodash';
import { createSelector } from 'reselect';

export function selectPopupInfo(state, popupId) {
  return get(state, `popups.${popupId}`) || {};
}

export const selectIsOpen = createSelector(
  selectPopupInfo,
  popupInfo => {
    return get(popupInfo, 'isOpen') || false;
  }
);

export const selectPopupConfig = createSelector(
  selectPopupInfo,
  popupInfo => {
    return get(popupInfo, 'config') || {};
  }
);

import { get } from 'lodash';

// Actions
import { showPopup } from '../actions/popupActions';

// Constants
import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from '../constants/apiConstants';
import { ERROR_POPUP_ID } from '../constants/popupConstants';

// Helpers
import AJAX from '../helpers/ajax';

export function prepareErrorMessage(error) {
  return error;
}

export function prepareAction(type, context, payload, action) {
  return ({
    type,
    context,
    payload,
    initialActionData: {
      ...action
    }
  });
}

function sendRequest(action, dispatch) {
  const {
    type, url, method, body = {}, silent = true
  } = action;

  return AJAX({
    method,
    url,
    data: body
  })
    .then(response => {
      const data = get(response, 'data') || {};

      dispatch(prepareAction(
        type,
        REQUEST_SUCCESS,
        data,
        action
      ));

      return data;
    })
    .catch(error => {
      console.error(error);

      if (!silent) {
        dispatch(showPopup(ERROR_POPUP_ID, prepareErrorMessage(error)));
      }

      dispatch(prepareAction(type, REQUEST_FAILURE, error, action));

      return error;
    });
}

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.context === REQUEST_PENDING) {
    return sendRequest(action, dispatch);
  }

  return next(action);
};

export default apiMiddleware;

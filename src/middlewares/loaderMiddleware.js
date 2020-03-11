// actions
import {
  increaseCountOfIntiatedRequests,
  increaseCountOfCompletedRequests
} from "../actions/loaderActions";

// constants
import {
  REQUEST_FAILURE,
  REQUEST_PENDING,
  REQUEST_SUCCESS
} from "../constants/apiConstants";

const loaderMiddleware = ({ dispatch }) => next => action => {
  const { context, noLoader, initialActionData } = action;

  switch (context) {
    case REQUEST_PENDING:
      !noLoader && dispatch(increaseCountOfIntiatedRequests());
      break;
    case REQUEST_SUCCESS:
    case REQUEST_FAILURE:
      !initialActionData.noLoader && dispatch(increaseCountOfCompletedRequests());
      break;
    default:
      break;
  }

  return next(action);
}

export default loaderMiddleware;
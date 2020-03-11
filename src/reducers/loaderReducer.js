// Constants
import {
  INCREASE_COUNT_OF_INITIATED_REQUESTS,
  INCREASE_COUNT_OF_COMPLETED_REQUESTS
} from '../constants/loaderConstants';

// Helpers
import { createReducer } from '../helpers/redux';

const initialState = {
  initiatedRequests: 0,
  completedRequests: 0
};

function incrementCountOfInitiatedRequests(state) {
  return {
    ...state,
    initiatedRequests: state.initiatedRequests + 1
  };
}

function incrementCountOfCompletedRequests(state) {
  return {
    ...state,
    completedRequests: state.completedRequests + 1
  };
}

const handlers = {
  [INCREASE_COUNT_OF_INITIATED_REQUESTS]: incrementCountOfInitiatedRequests,
  [INCREASE_COUNT_OF_COMPLETED_REQUESTS]: incrementCountOfCompletedRequests
};

export default createReducer(initialState, handlers);

import { get } from 'lodash';
import { createSelector } from 'reselect';

// Constants
import { STATE } from "../constants/stateConstats";

export const selectShowLoader = createSelector(
  state => get(state, STATE.LOADER),
  ({ initiatedRequests, completedRequests }) => initiatedRequests !== completedRequests
);

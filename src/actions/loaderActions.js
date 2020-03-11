import { 
  INCREASE_COUNT_OF_INITIATED_REQUESTS, 
  INCREASE_COUNT_OF_COMPLETED_REQUESTS 
} from "../constants/loaderConstants";

export function increaseCountOfIntiatedRequests() {
  return {
    type: INCREASE_COUNT_OF_INITIATED_REQUESTS
  }
}
export function increaseCountOfCompletedRequests() {
  return {
    type: INCREASE_COUNT_OF_COMPLETED_REQUESTS
  };
}

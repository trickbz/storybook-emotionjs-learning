// Constants
import { 
  REQUEST_PENDING, 
  METHOD_GET 
} from "../../constants/apiConstants";

const GET_PUBLIC_REPOS = 'GET_PUBLIC_REPOS';

export function fetchPublicRepositories(username) {
  return {
    type: GET_PUBLIC_REPOS,
    context: REQUEST_PENDING,
    method: METHOD_GET,
    url: `/users/${username}/repos`
  }
}

// Constants
import { 
  REQUEST_PENDING, 
  METHOD_GET, 
  GITHUB_API_PREFIX
} from "../../constants/apiConstants";
const GET_PUBLIC_REPOS = 'GET_PUBLIC_REPOS';

export function fetchPublicRepositories(username) {
  return {
    type: GET_PUBLIC_REPOS,
    context: REQUEST_PENDING,
    method: METHOD_GET,
    url: `/${GITHUB_API_PREFIX}/users/${username}/repos`
  }
}

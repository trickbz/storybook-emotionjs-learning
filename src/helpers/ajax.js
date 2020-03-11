import axios from 'axios';

const authToken = process.env.NODE_ENV === 'development' 
  ? {}
  : {};

const AJAX = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Pragma: 'no-cache',
    ...authToken
  }
});

export default AJAX;

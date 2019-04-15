import axios from 'axios';

const setAuthorizationToken = token => {
  if (token) {
    // Apply the token to every request
    axios.defaults.headers.common['Authorization'] = token;
  } 
  
  else {
    // Delete the authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthorizationToken;

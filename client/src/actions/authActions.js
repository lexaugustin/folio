import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const signUpUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => history.push('/signin'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Load the user token
export const signInUser = userData => dispatch => {
  axios.post('/api/users/signin', userData)
    .then(res => {
      // Save the token to local storage
      const { token } = res.data;
      // Set the token to local storage
      // Local storage only stores strings
      localStorage.setItem('jwtToken', token);
      // Set the token to the authorization header
      setAuthorizationToken(token);
      // Decode the token using "jwt_decode" to get user data
      const decodedData = jwt_decode(token);
      // Set the current user using the decoded data
      dispatch(setCurrentUser(decodedData));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set the current user
export const setCurrentUser = decodedData => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedData
  };
};

// Sign Out 
export const signOutUser = () => dispatch => {
  // Delete the token from the localStorage
  localStorage.removeItem('jwtToken');
  // Remove authorization header for future requests, so it wont be attached
  // to any future request after the user logs out
  setAuthorizationToken(false);
  // Set current user to an empty object which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

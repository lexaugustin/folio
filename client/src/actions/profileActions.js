import axios from 'axios';

import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER} from './types';


export const createProfile = (profileData, history) => dispatch => {
    axios .post('/api/profile', profileData)
        .then(res => history.push('/userprofile'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// Get all profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('/api/profile/all')
        .then(res =>
            dispatch({
            type: GET_PROFILES,
            payload: res.data
            })
        )
        .catch(err =>
            dispatch({
            type: GET_PROFILES,
            payload: null
            })
        );
  };

// Get profile by username
export const getProfileByUsername = username=> dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`/api/profile/username/${username}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: null
        })
      );
  };

// Add education to profile
export const addEducation = (eduData, history) => dispatch => {
    axios.post('/api/profile/education', eduData)
        .then(res => history.push('/userprofile'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
         );
};

// Delete education from profile
export const deleteEducation = id => dispatch => {
    axios.delete(`/api/profile/education/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Add experience to profile
export const addExperience = (expData, history) => dispatch => {
    axios
      .post('/api/profile/experience', expData)
      .then(res => history.push('/userprofile'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// Delete experience from profile
export const deleteExperience = id => dispatch => {
    axios.delete(`/api/profile/experience/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete the user account and the user profile
export const deleteAccount = () => dispatch => {
    if (window.confirm('Are you sure you want to delete the account?')) {
      axios.delete('/api/profile')
        .then(res =>
            dispatch({
                type: SET_CURRENT_USER,
                payload: {}
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
    }
  };


export const setProfileLoading = () => {
    return { type: PROFILE_LOADING };
};
  

export const clearCurrentProfile = () => {
    return { type: CLEAR_CURRENT_PROFILE };
};
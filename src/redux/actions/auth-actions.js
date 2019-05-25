import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { SET_CURRENT_USER, GET_ERRORS } from './types';
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

export const loginUser = userData => dispatch => {
    axios
      .post("http://localhost:5000/api/auth", userData)
      .then(res => {
        //Save token in localstorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
  
        //Set token to Auth header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };

  export const logoutUser = () => dispatch => {
    //remove token from localstorage
    // localStorage.removeItem("jwtToken");
    sessionStorage.removeItem("jwtToken");
    //Remove auth header for futur request
    setAuthToken(false);
    //set user to {} wich will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
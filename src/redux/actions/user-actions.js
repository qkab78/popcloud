import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (userData, history) => dispatch => {
  console.log(userData)
    axios
      .post("http://localhost:5000/api/users", userData)
      .then(res => history.push("/signin"))
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
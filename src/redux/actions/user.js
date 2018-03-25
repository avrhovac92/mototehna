import * as types from 'redux/actionTypes';
import { Fetch } from 'config/helpers';

export const updateUser = data => {
  return (dispatch, getState) => {
    dispatch({
      type: types.UPDATE_USER,
      data
    });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.LOGOUT
    });
  };
};

export const registerUser = user => {
  return async (dispatch, getState) => {
    try {
      const regUser = await Fetch({
        endpoint: 'http://localhost:3001/api/users/signup',
        method: 'POST',
        body: user
      });
      const result = await regUser.json();
      dispatch(updateUser(result));
      return { status: true };
    } catch (error) {
      console.log(error.message);
      return { status: false, message: error.message };
    }
  };
};

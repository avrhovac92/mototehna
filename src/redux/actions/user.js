import * as types from "redux/actionTypes";
import { Fetch } from "config/helpers";

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
        endpoint: "http://localhost:3001/api/users/signup",
        method: "POST",
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

export const signInUser = user => {
  return async (dispatch, getState) => {
    try {
      const siUser = await Fetch({
        endpoint: "http://localhost:3001/api/users/signin",
        method: "POST",
        body: user
      });
      if (siUser.status === 200) {
        const result = await siUser.json();
        dispatch(updateUser(result.user));
        return { status: true };
      }
      return { status: false };
    } catch (error) {
      console.log(error.message);
      return { status: false, message: error.message };
    }
  };
};

export const sendContactForm = data => {
  return async (dispatch, getState) => {
    try {
      await Fetch({
        method: "POST",
        endpoint: "http://localhost:3001/api/contact",
        body: data
      });
      return { status: true };
    } catch (error) {
      console.log(error.message);
      return { status: false, message: error.message };
    }
  };
};

export const patchUser = user => {
  return async (dispatch, getState) => {
    try {
      const pUser = await Fetch({
        endpoint: "http://localhost:3001/api/users/" + user._id,
        method: "PATCH",
        body: user
      });
      console.log("pUser", pUser);
      const result = await pUser.json();
      console.log("result", result);
      dispatch(updateUser(result.user));
      return { status: true };
    } catch (error) {
      console.log(error.message);
      return { status: false, message: error.message };
    }
  };
};

export const updatePassword = user => {
  return async (dispatch, getState) => {
    try {
      const passwordPatch = await Fetch({
        endpoint: "http://localhost:3001/api/users/" + user._id,
        method: "PATCH",
        body: user
      });
      console.log("passwordPatch", passwordPatch);
      const result = await passwordPatch.json();
      console.log("result", result);
      dispatch(updateUser(result.user));
      return { status: true };
    } catch (error) {
      console.log(error.message);
      return { status: false, message: error.message };
    }
  };
};

// export const getProducts = () => {
//   return async (dispatch, getState) => {
//     try {
//       const gettingProducts = await Fetch({
//         endpoint: "http://localhost:3001/api/products/",
//         method: "GET"
//       });
//       const result = await gettingProducts.json();
//       console.log(result);
//       return { result };
//     } catch (error) {
//       console.log(error.message);
//       return { message: error.message };
//     }
//   };
// };
//
// console.log(getProducts());

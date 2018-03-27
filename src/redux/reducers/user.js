import * as types from 'redux/actionTypes';
const initialState = {
  email: '',
  address: '',
  phone: '',
  firstName: '',
  lastName: '',
  token: ''
};

export default function stuff(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_USER:
      return {
        ...state,
        ...action.data
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}

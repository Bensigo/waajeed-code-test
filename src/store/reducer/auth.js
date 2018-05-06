import { USER_SESSION } from '../action/auth';

const INITIAL_STATE = {
  authUser: null
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SESSION:
     const payload = JSON.parse(localStorage.getItem("user"));
      return { ...state, authUser: payload };
    default:
      return state;
  }
};
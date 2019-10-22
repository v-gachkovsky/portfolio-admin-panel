/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../init/history';

import { logout } from './auth/routines';
import authReducer from './auth/reducer';
/**
 * Creates the main reducer with the dynamically injected ones
 */
const makeAppReducer = injectedReducers => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  ...injectedReducers,
});

function createReducer(injectedReducers) {
  const appReducer = makeAppReducer(injectedReducers);

  // Reset redux store to initial state on logout action
  return (state, action) => {
    if (action.type === logout.SUCCESS) {
      // TODO: clear token here

      // Clear all state except router, because connected-react-router which is used
      // depends on differences between history state in redux and actual browser history.
      return appReducer({ router: state.router }, action);
    }

    return appReducer(state, action);
  };
}

export default createReducer;

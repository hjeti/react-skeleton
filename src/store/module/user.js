import { handleActions, createAction } from 'redux-actions';
import { createSelector } from 'reselect';

// Actions
const namespace = 'user';

const SET_USER = `${namespace}/SET_USER`;
const SET_FIRST_NAME = `${namespace}/SET_FIRST_NAME`;
const SET_LAST_NAME = `${namespace}/SET_LAST_NAME`;

// Reducer
const initialState = {
  firstName: '',
  lastName: '',
};

const userReducer = handleActions(
  {
    [SET_USER]: (state, { payload }) => ({ ...state, ...payload }),
    [SET_FIRST_NAME]: (state, { payload: firstName }) => ({ ...state, firstName }),
    [SET_LAST_NAME]: (state, { payload: lastName }) => ({ ...state, lastName }),
  },
  initialState,
);

export default userReducer;

// Action creators
export const setUser = createAction(SET_USER);
export const setFirstName = createAction(SET_FIRST_NAME);
export const setLastName = createAction(SET_LAST_NAME);

// Selectors
export const getFullName = createSelector(
  state => state[namespace],
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);

import { createAction, handleActions } from 'redux-actions';

// Actions
const namespace = 'app';

const SET_DEVICE_STATE = `${namespace}/SET_DEVICE_STATE`;

// Reducer
const initialState = {
  deviceState: null,
};

const appReducer = handleActions(
  {
    [SET_DEVICE_STATE]: (state, { payload: deviceState }) => ({
      ...state,
      deviceState,
    }),
  },
  initialState,
);

export default appReducer;

// Action creators
export const setDeviceState = createAction(SET_DEVICE_STATE);

// Thunks

// Selectors

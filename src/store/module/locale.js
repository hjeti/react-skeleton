import { handleActions } from 'redux-actions';

// Actions
// const namespace = 'locale';

// Reducer
const initialState = {
  translations: {},
  loaded: [],
  loading: [],
  activeLocale: null,
};

const localeReducer = handleActions({}, initialState);

export default localeReducer;

// Action creators

// Thunks

// Selectors

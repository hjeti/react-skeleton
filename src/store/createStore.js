import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './modules';
import asyncAction from './middleware/asyncActionMiddleware';
import locale from './middleware/localeMiddleware';

export default history => {
  const middleware = [asyncAction, thunk, locale];

  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};

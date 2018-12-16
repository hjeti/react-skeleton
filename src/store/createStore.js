import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './modules';
import { asyncAction } from '../util/asyncActionMiddleware';

export default history => {
  const middleware = [asyncAction, thunk];

  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};

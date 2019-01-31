import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './module/user';
import app from './module/app';

export default history =>
  combineReducers({
    app,
    user,
    router: connectRouter(history),
  });

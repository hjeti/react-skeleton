import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './module/user';

export default history =>
  combineReducers({
    user,
    router: connectRouter(history),
  });

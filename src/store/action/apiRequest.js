import { createAction } from 'redux-actions';
import { getValue } from '../../util/injector';

/**
 * Simple wrapper action to execute a gateway request. Will dispatch an async action (action with
 * promise on payload) with additional information about the API call on the meta property.
 * @function apiRequest
 * @param {string} method The request method to use ("get", "post", etc..)
 * @param {string} actionType The 'type' property of the dispatched action is set to this value
 * @param {string} gatewayType The type of gateway to use. These should be one of the strings
 * defined in _Injectables.js_
 * @param {string} path The path to the endpoint to request
 * @param {object} [data=null] Object with data to send with the API request
 * @param {object} [options={}] Object with additional options passed to the gateway. Please see
 * the gateway documentation for more information
 */
export const apiRequest = (
  method,
  actionType,
  gatewayType,
  path,
  data = null,
  options = {},
) => dispatch =>
  dispatch(
    createAction(actionType, null, (payload, meta) => meta)(
      method === 'delete' || method === 'get'
        ? getValue(gatewayType)[method](path, options)
        : getValue(gatewayType)[method](path, data, options),
      { api: { data, options } },
    ),
  );

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'get'. All other
 * parameters are the same.
 * @function apiGet
 */
export const apiGet = (...requestArgs) => apiRequest('get', ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'post'. All other
 * parameters are the same.
 * @function apiPost
 */
export const apiPost = (...requestArgs) => apiRequest('post', ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'put'. All other
 * parameters are the same.
 * @function apiPut
 */
export const apiPut = (...requestArgs) => apiRequest('put', ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'patch'. All other
 * parameters are the same.
 * @function apiPatch
 */
export const apiPatch = (...requestArgs) => apiRequest('patch', ...requestArgs);

/**
 * Wrapper action for 'apiRequest()' that sets the method to 'delete'. All other
 * parameters are the same.
 * @function apiDelete
 */
export const apiDelete = (...requestArgs) => apiRequest('delete', ...requestArgs);

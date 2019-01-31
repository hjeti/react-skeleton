import shortid from 'shortid';
import { actionPayloadIsPromise, isAsyncAction } from '../../util/actionUtils';

const asyncAction = ({ dispatch }) => next => action => {
  if (actionPayloadIsPromise(action) && !isAsyncAction(action)) {
    const asyncId = shortid.generate();
    const asyncMeta = {
      isAsync: true,
      isFulfilled: false,
      asyncId,
    };

    dispatch({
      ...action,
      meta: {
        ...(action.meta || {}),
        ...asyncMeta,
      },
    });

    const fulfilledMeta = {
      isAsync: true,
      isFulfilled: true,
      asyncId,
    };

    return action.payload
      .catch(error => {
        dispatch({
          ...action,
          meta: {
            ...(action.meta || {}),
            ...fulfilledMeta,
          },
          error: true,
          payload: error,
        });

        throw error;
      })
      .then(resolvedValue => {
        dispatch({
          ...action,
          meta: {
            ...(action.meta || {}),
            ...fulfilledMeta,
          },
          payload: resolvedValue,
        });

        return resolvedValue;
      });
  }

  return next(action);
};

export default asyncAction;

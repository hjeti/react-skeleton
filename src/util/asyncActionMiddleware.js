import shortid from 'shortid';

const actionPayloadIsPromise = action =>
  action.payload && typeof action.payload.then === 'function';
export const isAsyncAction = action => action.meta && action.meta.isAsync;
export const isFulfilledAsyncAction = action => isAsyncAction(action) && action.meta.isFulfilled;
export const isResolvedAsyncAction = action => isFulfilledAsyncAction(action) && !action.error;

export const asyncAction = ({ dispatch }) => next => action => {
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

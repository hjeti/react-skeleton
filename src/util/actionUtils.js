import * as FSA from 'flux-standard-action';

export const actionPayloadIsPromise = action =>
  action.payload && typeof action.payload.then === 'function';

export const isAsyncAction = action => action.meta && action.meta.isAsync;

export const isFulfilledAsyncAction = action => isAsyncAction(action) && action.meta.isFulfilled;

export const isResolvedAsyncAction = action => isFulfilledAsyncAction(action) && !action.error;

export const isFSA = action => FSA.isFSA(action);

export const isError = action => FSA.isError(action);

export const isLoading = action => isAsyncAction(action) && !isFulfilledAsyncAction(action);

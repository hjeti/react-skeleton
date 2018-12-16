import * as FSA from 'flux-standard-action';
import { isFulfilledAsyncAction, isAsyncAction } from './asyncActionMiddleware';

export const isFSA = action => FSA.isFSA(action);

export const isError = action => FSA.isError(action);

export const isLoading = action => isAsyncAction(action) && !isFulfilledAsyncAction(action);

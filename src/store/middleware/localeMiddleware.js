/* eslint-disable */
const locale = ({ dispatch }) => next => action => {
  if (action && action.type === '@@router/LOCATION_CHANGE') {
    return next(action);
  } else {
    return next(action);
  }
};

export default locale;

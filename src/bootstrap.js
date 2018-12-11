import 'modernizr';
import './asset/style/screen.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import startUp from './control/startUp';
import setupInjects from './util/setupInjects';
import App from './App';
import createStore from './store/createStore';

setupInjects();

if (window.webpackPublicPath) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.webpackPublicPath;
}

const history = createBrowserHistory();
const store = createStore(history);

// Mount the app after startUp
startUp().then(() => {
  ReactDOM.render(<App store={store} history={history} />, document.getElementById('app'));
});

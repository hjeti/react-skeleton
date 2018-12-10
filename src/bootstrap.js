import 'modernizr';
import './asset/style/screen.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import startUp from './control/startUp';
import setupInjects from './util/setupInjects';
import App from './App';

setupInjects();

if (window.webpackPublicPath) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.webpackPublicPath;
}

// Mount the app after startUp
startUp().then(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});

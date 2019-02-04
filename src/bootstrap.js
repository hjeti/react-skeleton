import 'modernizr';
import './asset/style/screen.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { DeviceStateEvent } from 'seng-device-state-tracker';

import startUp from './control/startUp';
import setupInjects from './util/setupInjects';
import App from './App';
import createStore from './store/createStore';
import { getValue } from './util/injector';
import { CONFIG_MANAGER, DEVICE_STATE_TRACKER } from './data/Injectables';
import { setDeviceState } from './store/module/app';
import { VariableNames } from './data/enum/configNames';

setupInjects();

if (window.webpackPublicPath) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.webpackPublicPath;
}

const configManager = getValue(CONFIG_MANAGER);

const history = createBrowserHistory({
  basename: configManager.getVariable(VariableNames.PUBLIC_PATH),
});

const store = createStore(history);
const deviceStateTracker = getValue(DEVICE_STATE_TRACKER);

deviceStateTracker.addEventListener(DeviceStateEvent.STATE_UPDATE, event =>
  store.dispatch(setDeviceState(event.data.state)),
);

store.dispatch(setDeviceState(deviceStateTracker.currentDeviceState.state));

// Mount the app after startUp
startUp().then(() => {
  ReactDOM.render(<App store={store} history={history} />, document.getElementById('app'));
});

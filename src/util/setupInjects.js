import ConfigManager from 'seng-config';
import axios from 'axios';
import DeviceStateTracker from 'seng-device-state-tracker';

import { URLNames } from '../data/enum/configNames';
import { CONFIG_MANAGER, DEVICE_STATE_TRACKER, GATEWAY } from '../data/Injectables';
import config from '../config/config';
import { setValue } from './injector';
import { responseFormatter, errorFormatter } from './gatewayFormatter';
import { mediaQueries, deviceState } from '../data/mediaQueries.json';

const setupInjects = () => {
  const configManager = new ConfigManager();
  configManager.init(config.config, config.environment);

  const deviceStateTracker = new DeviceStateTracker({
    mediaQueries,
    deviceState,
    showStateIndicator: process.env.NODE_ENV !== 'production',
  });

  const gateway = axios.create({
    baseURL: configManager.getURL(URLNames.API),
    headers: {
      Accept: 'application/json',
    },
    responseType: 'json',
  });

  gateway.interceptors.response.use(
    response => responseFormatter(response),
    error => {
      throw errorFormatter(error);
    },
  );

  setValue(CONFIG_MANAGER, configManager);
  setValue(GATEWAY, gateway);
  setValue(DEVICE_STATE_TRACKER, deviceStateTracker);
};

export default setupInjects;

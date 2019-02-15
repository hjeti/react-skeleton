import { EnvironmentNames, VariableNames, URLNames, PropertyNames } from '../data/enum/configNames';

const config = {
  environments: {
    [EnvironmentNames.PRODUCTION]: {
      variables: {},
      urls: {},
    },
    [EnvironmentNames.STAGING]: {
      extends: EnvironmentNames.PRODUCTION,
      variables: {},
      urls: {},
    },
    [EnvironmentNames.DEVELOPMENT]: {
      extends: EnvironmentNames.STAGING,
      variables: {},
      urls: {},
    },
    [EnvironmentNames.LOCAL]: {
      extends: EnvironmentNames.DEVELOPMENT,
      variables: {},
      urls: {},
    },
  },
  variables: {
    [VariableNames.LOCALE_ENABLED]: true,
    [VariableNames.LOCALE_ROUTING_ENABLED]: true,
    [VariableNames.VERSIONED_STATIC_ROOT]:
      (window.webpackPublicPath || process.env.PUBLIC_PATH) + process.env.VERSIONED_STATIC_ROOT,
    [VariableNames.STATIC_ROOT]:
      (window.webpackPublicPath || process.env.PUBLIC_PATH) + process.env.STATIC_ROOT,
    [VariableNames.PUBLIC_PATH]: window.webpackPublicPath || process.env.PUBLIC_PATH,
  },
  urls: {
    [URLNames.API]: `${process.env.PUBLIC_PATH}api/`,
  },
  properties: {
    [PropertyNames.LOCALES]: ['en'],
    [PropertyNames.DEFAULT_LOCALE]: 'en',
  },
};

let environment = EnvironmentNames.PRODUCTION;
const { host } = document.location;

switch (host.split(':').shift()) {
  case 'localhost': {
    environment = EnvironmentNames.LOCAL;
    break;
  }
  default: {
    environment = EnvironmentNames.PRODUCTION;
    break;
  }
}

export default {
  config,
  environment,
};

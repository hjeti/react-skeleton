import waitForStyleSheetsLoaded from '../util/waitForStyleSheetsLoaded';
import { PropertyNames, VariableNames } from '../data/enum/configNames';
import initLocale from '../locale/initLocale';

const initPlugins = () => {};

const startUp = (store, history, configManager) => {
  // Initialise plugins
  initPlugins();

  // Add async methods to the Promise.all array
  return Promise.all([
    process.env.NODE_ENV !== 'production' ? waitForStyleSheetsLoaded(document) : Promise.resolve(),
    configManager.getVariable(VariableNames.LOCALE_ENABLED)
      ? initLocale(
          store,
          history,
          configManager.getVariable(VariableNames.LOCALE_ROUTING_ENABLED),
          configManager.getVariable(PropertyNames.DEFAULT_LOCALE),
          configManager.getProperty(PropertyNames.LOCALES),
        )
      : Promise.resolve(),
  ]);
};

export default startUp;

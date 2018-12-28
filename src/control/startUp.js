import waitForStyleSheetsLoaded from '../util/waitForStyleSheetsLoaded';

const initPlugins = () => {};

const startUp = () => {
  // Initialise plugins
  initPlugins();

  // Add async methods to the Promise.all array
  return Promise.all([
    process.env.NODE_ENV !== 'production' ? waitForStyleSheetsLoaded(document) : Promise.resolve(),
  ]);
};

export default startUp;

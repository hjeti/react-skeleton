const initPlugins = () => {};

const startUp = () => {
  // Initialise plugins
  initPlugins();

  // Add async methods to the Promise.all array
  return Promise.all([Promise.resolve()]);
};

export default startUp;

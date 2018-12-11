import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

import styles from './App.module.scss';
import Routes from '../routes/Routes';

const App = ({ history, store }) => (
  <Provider store={store}>
    <div className={styles.app}>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  </Provider>
);

App.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;

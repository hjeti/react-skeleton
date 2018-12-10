import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import Routes from '../routes/Routes';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Routes />
    </Router>
  </div>
);

App.propTypes = {};

export default App;

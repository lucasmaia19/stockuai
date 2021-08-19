import React from 'react';

import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import history from './utils/history';
import Routes from './Routes';

function App() {
  return (
    <>
      <ToastContainer autoClose={6000} />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;

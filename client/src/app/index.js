import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from '../logo.svg';
import { NavBar } from '../components';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
    </Router>
  );
}

export default App;

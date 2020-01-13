import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from '../logo.svg';
import { NavBar } from '../components';
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path='/movies/list' exact component={MoviesList}></Route>
        <Route path='/movies/create' exact component={MoviesInsert}></Route>
        <Route path='/movies/update/:id' exact component={MoviesUpdate}></Route>
      </Switch>
    </Router>
  );
}

export default App;

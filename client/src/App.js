import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}/>
      <Route path="/create-account" component={CreateAccount}/>
    </Router>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import PrivateRoute from './utils/PrivateRoute';
import ProfilePage from './components/ProfilePage';

import './App.css';
import LargeCaseStudy from './components/LargeCaseStudy';
import CaseStudiesList from './components/CaseStudiesList';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Login} />
			<Route path="/create-account" component={CreateAccount} />
			{/***Make The Routes Below Private***/}
			<PrivateRoute exact path="/profile-page" component={ProfilePage} />
		</Router>
	);
}

export default App;

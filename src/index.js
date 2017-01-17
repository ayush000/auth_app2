import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Home from './Home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/home" component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import App from './App';
import Home from './Home';
import Product from './Product';
import Profile from './Profile';
import NoMatch from './NoMatch';

const routes = (
  <Route path="/" component={App} >
    <IndexRedirect to="home" />
    {/* <IndexRoute component={Home} /> */}
    <Route path="home" component={Home} />
    <Route path="product" component={Product} />
    <Route path="profile" component={Profile} />
    <Route path="*" component={NoMatch} />
  </Route>
);

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
)

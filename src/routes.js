import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from './App.js';
import Home from './containers/Home';
import Blog from './containers/Blog';
import Show from './containers/Show';
import About from './containers/About';
import Account from './containers/Account';
import Item from './item/index.js';


class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/show' component={Show} />
          <Route path='/blog' component={Blog} />
          <Route path='item/:title' component={Item} />
          <Route path='/account' component={Account} />
          <Route path='/about' component={About} />
          
        </Route>
      </Router>
    )
  }
}

export default Routes;

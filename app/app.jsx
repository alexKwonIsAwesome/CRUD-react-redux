var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var App = require('App');

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

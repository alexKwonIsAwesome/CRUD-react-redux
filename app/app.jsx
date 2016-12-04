var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var App = require('App');
var PostList = require('PostsList');

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

const store = createStore(() => {});

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PostList}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

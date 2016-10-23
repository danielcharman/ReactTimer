let React = require('react');
let ReactDOM = require('react-dom');

let {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

let Main = require('Main');
let Timer = require('Timer');
let Countdown = require('Countdown');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

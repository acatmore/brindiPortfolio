require('babel-polyfill');
var React      		   = require('react');
var ReactDOM   		   = require('react-dom');
var router     		   = require('react-router');
var Provider   		   = require('react-redux').Provider;
var store	   		   = require('./store');
var App        		   = require('./components/App');
var IllustrationList   = require('./components/illustration-list');
var Router  		   = require.Router;
var Route 			   = require.Route;
var hashHistory        = require.hasHistory;
var indexRoute 		   = require.IndexRoute;


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/"  component={App}>
					<Route path=":slug" component={IllustrationList} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});


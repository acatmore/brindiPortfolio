require('babel-polyfill');
import React from "react";
import ReactDOM from "react-dom";
import router from "react-router";
import {Provider} from "react-redux";
import store from "./store";
import App from "./components/App";
import Illustration from "./components/illustration";
import IllustrationList from "./components/illustration-list";
var Router 		= require('react-router').Router;
var Route  		= require('react-router').Route;
var hashHistory = require('react-router').hashHistory;


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path=""  component={App}>
					<Route path="/" component={IllustrationList} />
					<Route path=":id/:slug" component={Illustration} />

				</Route>
			</Router>
		</Provider>,
		document.getElementById('app'));
});



// <App />
//					<Route path="categories/comission/" component={CommissionIllustrationList} />
//					<Route path="categories" component={} />
//	<Route path="/personal" component={PersonalIllustrationList} />
//	<Route path="/sketches" component={SketchesIllustrationList} />

import React from "react";
import ReactDOM from "react-dom";
import router from "react-router";
import {Provider} from "react-redux";
import store from "./store";
import App from "./components/App";
import Illustration from "./components/illustration";
import IllustrationList from "./components/illustration-list";
// var Router 		= router.Router;
// var Route  		= router.Route;
// var hashHistory = router.hashHistory;


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app'));
});



			// <Router history={hashHistory}>
			// 	<Route path=""  component={App}>
			// 		<Route path="/" component={IllustrationList} />
			// 		<Route path=":id" component={IllustrationList} />
			// 	</Route>
			// </Router>
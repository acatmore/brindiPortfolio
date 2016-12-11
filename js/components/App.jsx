var React 			 = require('react');
var Header 			 = require('./header');
var Nav				 = require('./nav');
var IllustrationList = require('./illustration-list');
var Illustration     = require('./illustration');
var About 			 = require('./about');
var Footer			 = require('./footer');


var App = function(props) {
	return (
		<div>
			<header />
			<main id="content">
				<IllustrationList />
			</main>
			<Footer />
		</div>

	);
};


module.exports = App;
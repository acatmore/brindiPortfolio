var React 			 = require('react');
var Header 			 = require('./header');
var IllustrationList = require('./illustration-list');
var Illustration     = require('./illustration');
var About 			 = require('./about');
var Footer			 = require('./footer');


var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<main id="content">
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}
});


module.exports = App;
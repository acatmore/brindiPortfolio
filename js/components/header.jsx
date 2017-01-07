var React   = require('react');
// import style from "./header.scss";
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link	= router.Link;


var Header = React.createClass({
	componentWillMount: function() {
		this.props.dispatch(
			actions.fetchSiteInfo()
		);
	},

	render: function() {
		return(
			<header role="banner" className="site-header">
				<ul>
					<li><h1 class="name-link"><Link to={'/'}>{this.props.name}</Link></h1>
						<p>{this.props.description}</p>
					</li>
					<li class="nav"><Link to={'/about'}>about</Link></li>
					<li class="nav"><Link to={'/gallery'}>gallery</Link></li>
					<li class="nav"><Link to={'/blog'}>blog</Link></li>
					<li class="nav"><Link to={'/contact'}>contact</Link></li>
				</ul>
			</header>
		);
	}
});



var mapStateToProps = function(state, props) {
	return {

		name: state.name,
		description: state.description,
		illustrations: state.illustrations

	};
};


var Container = connect(mapStateToProps)(Header);


module.exports = Container;
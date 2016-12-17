var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var IllustrationList = React.createClass({
  componentDidMount: function() {
  	this.props.dispatch(
  		actions.fetchIllustrations()
  	);
  },
  viewSingleIllustration: function() {
  	this.props.dispatch(
  		actions.fetchSingleIllustration(this.props.illustration.id)
  	);
  },

  render: function() {
  	var illustrations = this.props.illustrations.map(
  		function(illustration, i) {
  			return (
  				<li key={i}>
  					<Link to={'/' + illustration.slug} onClick={this.viewSingleIllustration}>
  						{illustration.title.rendered}
  					</Link>
  				</li>
  			);
  		});
  	return (
  		<ul className="illustration-list">
  			{illustrations}
  		</ul>
  	);
  }
});


var mapStateToProps = function(state, props) {
  return {

  	illustrations: state.illustrations
  };
};


var Container = connect(mapStateToProps)(IllustrationList);


module.exports = Container;
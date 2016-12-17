var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;


var IllustrationList = React.createClass({
  componentWillMount: function() {
  	this.props.dispatch(
  		actions.fetchIllustrations(this.props.illustrations)
  	);
  },
  viewSingleIllustration: function() {
  	this.props.dispatch(
  		actions.fetchSingleIllustration(this.props.illustration.id)
  	);
  },

  eachIllustration: function(illustration, i) {
    return (
      <li key={i}>
        <Link to={'/' + illustration.slug} onClick={this.viewSingleIllustration}>
          {illustration.title.rendered}
        </Link>
      </li>
    );
  },

  render: function() {
  	return (
  		<ul className="illustration-list">
  			{this.props.illustrations.map(this.eachIllustration)}
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
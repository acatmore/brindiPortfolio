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

  getTitle: function(illustrationId) {
    return { __html: this.props.illustrations[illustrationId].title.rendered};
  },

  getExcerpt: function(illustrationId) {
    return { __html: this.props.illustrations[illustrationId].excerpt.rendered};
  },

  eachIllustration: function(illustrationId, i) {
    return (
      <li key={i}>
        <Link to={'/' + illustrationId} dangerouslySetInnerHTML={this.getTitle(IllustrationId)} />
        <div className="excerpt" dangerouslySetInnerHTML={this.getExcerpt(illustrationId)} />
      </li>
    );
  },

  render: function() {
    if (!this.props.illustrations) {
      return <div>loading... </div>;
    }

  	return (
  		<ul className="illustration-list">
  			{Object.keys(this.props.illustrations).map(this.eachIllustration)}
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
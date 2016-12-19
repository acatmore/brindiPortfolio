var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Illustration = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(
      actions.fetchIllustrations(this.props.illustrations)
    );
    this.props.dispatch(
      actions.fetchSingleIllustration(this.props.params.id)
    );
  },

  getTitle: function() {
    return { __html: this.props.currentIllustration.title.rendered};
  },

  getContent: function() {
    return { __html: this.props.currentIllustration.content.rendered};
  },

  render: function() {
    if (!this.props.currentIllustration) {
      return <div>loading... </div>
    }

    var {id, title, date, content} = this.props.currentIllustration;
  	return (
  		<image id={id} className="illustration">
  			<header className="illustration__heading">
      			<p> image goes here </p>
            <h2 dangerouslySetInnerHTML={this.getTitle()} />
            <p>Delivered on {date}</p>
      		</header>
      		<div className="illustration__entry" dangerouslySetInnerHTML={this.getContent()} />
    	</image>
  	);
  }
});


var mapStateToProps = function(state, props) {
  return {
    illustrations: state.illustrations,
  	currentIllustration: state.illustrations[props.params.id]
  };
};


var Container = connect(mapStateToProps)(Illustration);


module.exports = Container;
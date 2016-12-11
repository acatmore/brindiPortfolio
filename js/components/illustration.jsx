var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Illustration = React.createClass({
  render: function() {
  	var {id, title, date, content } = this.props.currentIllustration;
  	return (
  		<image id={id} className="illustration">
  			<header className="illustration__heading">
      			<h2>{title.rendered}</h2>
      			<p>{date}</p>
      			<p> image goes here </p>
      		</header>
      		<div className="illustration__entry">
      			{content.rendered}
      		</div>
    	</image>
  	);
  }
});


var mapStateToProps = function(state, props) {
  return {

  	currentIllustration: state.currentIllustration
  };
};


var Container = connect(mapStateToProps)(Illustration);


module.exports = Container;
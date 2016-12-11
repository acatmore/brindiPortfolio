var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var IllustrationList = React.createClass({
  render: function() {

  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(IllustrationList);


module.exports = Container;
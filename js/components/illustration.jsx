var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Illustration = React.createClass({
  render: function() {
    <image id="illustration">
      <h2>Illustration title</h2>
      <p>Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

      <p> image goes here </p>
    </image>
  }
});


var mapStateToProps = function(state, props) {
  return {

  };
};


var Container = connect(mapStateToProps)(Illustration);


module.exports = Container;
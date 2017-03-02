var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Footer = React.createClass({
  render: function() {
  	return (
  		<footer role="contentinfo" className="site-footer">
      		<p>Copyright © 2016 Brindi Kisamore All rights reserved. 
      		All images are the property of Brindi Kisamore unless stated 
      		otherwise and may not be used without written consent.</p>
    	</footer>
  		);

  }
});

var Container = connect()(Footer);


module.exports = Container;
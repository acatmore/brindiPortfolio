var React     = require('react');
var TestUtils = require('react-addons-test-utils');
var should    = require('chai').should();

var App       = require('../js/components/App');



describe('App', function() {
	it('Render hello world', function() {

		var renderer = TestUtils.createRenderer();
		renderer.render(<App />);
						var result = renderer.getRenderOutput();

		result.type.should.equal('h1');
		result.props.children.should.equal('hello world');
	});
});
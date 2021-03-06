var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var About = React.createClass({
  componentWillMount: function() {
  	this.props.dispatch(
  		actions.fetchAboutPage()
  	);
  },

  getPageContent: function() {
    return { __html: this.props.aboutPage.content.rendered};
  },

  render: function() {
    if (!this.props.aboutPage.title || !this.props.aboutPage.content) {
      return <div> loading about page... </div>;
    }

    return (
      <section id="about">
      	<h2>{this.props.aboutPage.title.rendered}</h2>
      	<div dangerouslySetInnerHTML={this.getPageContent()} />
  	  </section>
    );
  }
});


var mapStateToProps = function(state, props) {
  return {
    aboutPage: state.aboutPage
  };
};


var Container = connect(mapStateToProps)(About);


module.exports = Container;
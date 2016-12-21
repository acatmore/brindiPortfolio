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
    var dateFormat = new Date(this.props.illustrations[illustrationId].date);
    var datePretty = dateFormat.toDateString();
    var illustrationSlug = this.props.illustrations[illustrationId].slug;
    var illustrationNum = 'illustration-' + illustrationId;

    return (
      <article key={i} id={illustrationNum}>
        <header>
        <Link to={'/' + illustrationId + '/' + illustrationSlug} dangerouslySetInnerHTML={this.getTitle(illustrationId)} />
        </header>
        <div className="excerpt" dangerouslySetInnerHTML={this.getExcerpt(illustrationId)} />
        <Link to={'/' + illustrationId + '/' + illustrationSlug}>Read more &raquo;</Link>
      </article>
    );
  },

  getResponse: function() {
    if(Object.keys(this.props.illustrations).length === 0) {
      return <p> Loading illustrations... </p>;
    } else {
      return <div>{Object.keys(this.props.illustrations).map(this.eachIllustration)}</div>;
    }
  },

  render: function() {
  	return (
      <section className="section illustrations">
        <h2>The illustrations</h2>
          {this.getResponse()}
      </section>
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
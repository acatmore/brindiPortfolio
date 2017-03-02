var React   = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router  = require('react-router');
var Link    = router.Link;

var CommissionIllustrationList = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(
      actions.fetchCommissionIllustrations(this.props.commissionIllustrations)
    );
  },

  getTitle: function(illustrationId) {
    return { __html: this.props.commissionIllustrations[illustrationId].title.rendered};
  },

  getExcerpt: function(illustrationId) {
    return { __html: this.props.commissionIllustrations[illustrationId].excerpt.rendered};
  },

  getContent: function(illustrationId) {
    return { __html: this.props.commissionIllustrations[illustrationId].content.rendered};
  },

  eachIllustration: function(illustrationId, i) {
    var dateFormat = new Date(this.props.illustrations[illustrationId].date);
    var datePretty = dateFormat.toDateString();
    var illustrationSlug = this.props.commissionIllustrations[illustrationId].slug;
    var illustrationNum = 'commissionIllustration-' + illustrationId;

    return (
      <article key={i} id={illustrationNum}>
        <header>
        <Link to={'/categories/commissions' + illustrationId + '/' + illustrationSlug} dangerouslySetInnerHTML={this.getTitle(illustrationId)} />
        <p>Delivered on <time dateTime={this.props.commissionIllustrations[illustrationId].date} className="date">{datePretty}</time></p>
        </header>
        <div className="content" dangerouslySetInnerHTML={this.getContent(illustrationId)} />
        <div className="excerpt" dangerouslySetInnerHTML={this.getExcerpt(illustrationId)} />
      </article>
    );
  },

  getResponse: function() {
    if(Object.keys(this.props.commissionIllustrations).length === 0) {
      return <p> Loading illustrations... </p>;
    } else {
      return <div>{Object.keys(this.props.commissionIllustrations).map(this.eachIllustration)}</div>;
    }
  },

  render: function() {
    return (
      <section className="section commissionIllustrations">
        <h2>Commissions</h2>
          {this.getResponse()}
      </section>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {

    commissionIllustrations: state.commissionIllustrations
  };
};

var Container = connect(mapStateToProps)(CommissionIllustrationList);

module.exports = Container;
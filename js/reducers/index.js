var actions = require('../actions/index');


var initialState = {
  name: '',
  description: '',
  aboutPage: {},
  illustrations: {},
  currentIllustration: {},
  commissionIllustration: {}
};


var appReducer = function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case actions.FETCH_ILLUSTRATIONS_SUCCESS :
      var newIllustrations = {};
      action.illustrations.forEach(function(illustration) {
        newIllustrations[illustration.id] = illustration;
      });
      return Object.assign({}, state, { 
        illustrations: newIllustrations 
      });
      break;

    case actions.FETCH_COMMISSION_ILLUSTRATIONS_SUCCESS :
      var newIllustrations = {};
      action.commissionIllustrations.forEach(function(commissionIllustration) {
        newIllustrations[commissionIllustration.id] = commissionIllustration;
      });
      return Object.assign({}, state, {
        commissionIllustrations: newIllustrations
      });
      break;

    case actions.FETCH_SINGLE_ILLUSTRATION_SUCCESS :
      var newIllustrations = Object.assign({}, state.illustrations, {
        [actions.currentIllustration.id]: actions.currentIllustration
      });
      return Object.assign({}, state, { illustrations: newIllustrations });
      break;

    case actions.FETCH_ABOUT_PAGE_SUCCESS :
      return Object.assign({}, state, { aboutPage: action.page });
      break;

    case actions.FETCH_SITE_INFO_SUCCESS :
      return Object.assign({}, state, {
        name: action.name,
        description: action.description
      });
      break;
  }

  return state;
};


exports.appReducer = appReducer;
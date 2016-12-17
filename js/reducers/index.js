var actions = require('../actions/index');


var initialState = {
  name: '',
  description: '',
  aboutPage: {},
  illustrations: [],
  currentIllustration: {}
};


var appReducer = function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case actions.FETCH_ILLUSTRATIONS_SUCCESS :
      var newIllustrations = state.illustrations.concat(action.illustrations);
      return Object.assign({}, state, { illustrations: newIllustrations });
      break;

    case actions.FETCH_SINGLE_ILLUSTRATION_SUCCESS :
      return Object.assign({}, state, { currentIllustration: action.currentIllustration });
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
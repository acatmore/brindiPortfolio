// require('isomorphic-fetch');
import fetch from "isomorphic-fetch";

//fetch just commission illustrations
var FETCH_COMMISSION_ILLUSTRATIONS_SUCCESS = 'FETCH_COMMISSION_ILLUSTRATIONS_SUCCESS';
var fetchCommissionIllustrationsSuccess = function(commissionIllustrations) {
  return {
    type: FETCH_COMMISSION_ILLUSTRATIONS_SUCCESS,
    commissionIllustrations: commissionIllustrations
  };
};

var FETCH_COMMISSION_ILLUSTRATIONS_ERROR = 'FETCH_COMMISSION_ILLUSTRATIONS_ERROR';
var fetchCommissionIllustrationsError = function(commissionIllustrations, error) {
  return {
    type: FETCH_COMMISSION_ILLUSTRATIONS_ERROR,
    commissionIllustrations: commissionIllustrations,
    error: error
  };
};

var fetchCommissionIllustrations = function(illustrations) {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'http://localhost:8888/brindiPortfolio/wp-json/wp/v2/illustrations?filter[category_name]=commission';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    }) 
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var commissionIllustrations = data;
      return dispatch(fetchCommissionIllustrationsSuccess(commissionIllustrations));
    })
    .catch(function(error) {
      return dispatch(fetchCommissionIllustrationsError(commissionIllustrations, error));
    });
  }
};

//fetch all illustrations
var FETCH_ILLUSTRATIONS_SUCCESS = 'FETCH_ILLUSTRATIONS_SUCCESS';
var fetchIllustrationsSuccess = function(illustrations) {
  return {
    type: FETCH_ILLUSTRATIONS_SUCCESS,
    illustrations: illustrations
  };
};


var FETCH_ILLUSTRATIONS_ERROR = 'FETCH_ILLUSTRATIONS_ERROR';
var fetchIllustrationsError = function(illustrations, error) {
  return {
    type: FETCH_ILLUSTRATIONS_ERROR,
    illustrations: illustrations,
    error: error
  };
};


var fetchIllustrations = function(illustrations) {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'http://localhost:8888/brindiPortfolio/wp-json/wp/v2/illustrations';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var illustrations = data;
      return dispatch(fetchIllustrationsSuccess(illustrations));
    })
    .catch(function(error) {
      return dispatch(fetchIllustrationsError(illustrations, error));
    });
  }
};



var FETCH_SINGLE_ILLUSTRATION_SUCCESS = 'FETCH_SINGLE_ILLUSTRATION_SUCCESS';
var fetchSingleIllustrationSuccess = function(illustration) {
  return {
    type: FETCH_SINGLE_ILLUSTRATION_SUCCESS,
    currentIllustration: illustration
  };
};


var FETCH_SINGLE_ILLUSTRATION_ERROR = 'FETCH_SINGLE_ILLUSTRATION_ERROR';
var fetchSingleIllustrationError = function(illustration, error) {
  return {
    type: FETCH_SINGLE_ILLUSTRATION_ERROR,
    currentIllustration: illustration,
    error: error
  };
};


var fetchSingleIllustration = function(illustrationId) {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'http://localhost:8888/brindiPortfolio/wp-json/wp/v2/illustrations/' + illustrationId;

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var illustration = data;
      return dispatch(fetchSingleIllustrationSuccess(illustration));
    })
    .catch(function(illustration, error) {
      return dispatch(fetchSingleIllustrationError(illustration, error));
    });
  }
};


var FETCH_ABOUT_PAGE_SUCCESS = 'FETCH_ABOUT_PAGE_SUCCESS';
var fetchAboutPageSuccess = function(page) {
  return {
    type: FETCH_ABOUT_PAGE_SUCCESS,
    page: page
  };
};


var FETCH_ABOUT_PAGE_ERROR = 'FETCH_ABOUT_PAGE_ERROR';
var fetchAboutPageError = function(page, error) {
  return {
    type: FETCH_ABOUT_PAGE_ERROR,
    page: page,
    error: error
  };
};


var fetchAboutPage = function() {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'http://localhost:8888/brindiPortfolio/wp-json/wp/v2/pages';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var page = data;
      return dispatch(fetchAboutPageSuccess(page));
    })
    .catch(function(page, error) {
      return dispatch(fetchAboutPageError(page, error));
    });
  }
};


var FETCH_SITE_INFO_SUCCESS = 'FETCH_SITE_INFO_SUCCESS';
var fetchSiteInfoSuccess = function(name, description) {
  return {
    type: FETCH_SITE_INFO_SUCCESS,
    name: name,
    description: description
  };
};


var FETCH_SITE_INFO_ERROR = 'FETCH_SITE_INFO_ERROR';
var fetchSiteInfoError = function(name, description, error) {
  return {
    type: FETCH_SITE_INFO_ERROR,
    name: name,
    description: description,
    error: error
  };
};


var fetchSiteInfo = function() {
  return function(dispatch) {
    var init = { method: 'GET' };
    var url  = 'http://localhost:8888/brindiPortfolio/wp-json';

    return fetch(url, init).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response;
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var name = data.name;
      var description = data.description;
      return dispatch(fetchSiteInfoSuccess(name, description));
    })
    .catch(function(error) {
      var name = data.name;
      var description = data.description;
      return dispatch(fetchSiteInfoError(name, description, error));
    });
  }
};

exports.FETCH_COMMISSION_ILLUSTRATIONS_SUCCESS = FETCH_COMMISSION_ILLUSTRATIONS_SUCCESS;
exports.fetchCommissionIllustrationsSuccess    = fetchCommissionIllustrationsSuccess;

exports.FETCH_COMMISSION_ILLUSTRATIONS_ERROR   = FETCH_COMMISSION_ILLUSTRATIONS_ERROR;
exports.fetchCommissionIllustrationsError      = fetchCommissionIllustrationsError;

exports.fetchCommissionIllustrations  = fetchCommissionIllustrations;


exports.FETCH_ILLUSTRATIONS_SUCCESS  = FETCH_ILLUSTRATIONS_SUCCESS;
exports.fetchIllustrationsSuccess    = fetchIllustrationsSuccess;

exports.FETCH_ILLUSTRATIONS_ERROR  = FETCH_ILLUSTRATIONS_ERROR;
exports.fetchIllustrationsError    = fetchIllustrationsError;

exports.fetchIllustrations  = fetchIllustrations;


exports.FETCH_SINGLE_ILLUSTRATION_SUCCESS = FETCH_SINGLE_ILLUSTRATION_SUCCESS;
exports.fetchSingleIllustrationSuccess    = fetchSingleIllustrationSuccess;

exports.FETCH_SINGLE_ILLUSTRATION_ERROR = FETCH_SINGLE_ILLUSTRATION_ERROR;
exports.fetchSingleIllustrationError    = fetchSingleIllustrationError;

exports.fetchSingleIllustration  = fetchSingleIllustration;


exports.FETCH_ABOUT_PAGE_SUCCESS = FETCH_ABOUT_PAGE_SUCCESS;
exports.fetchAboutPageSuccess    = fetchAboutPageSuccess;

exports.FETCH_ABOUT_PAGE_ERROR = FETCH_ABOUT_PAGE_ERROR;
exports.fetchAboutPageError    = fetchAboutPageError;

exports.fetchAboutPage = fetchAboutPage;


exports.FETCH_SITE_INFO_SUCCESS = FETCH_SITE_INFO_SUCCESS;
exports.fetchSiteInfoSuccess    = fetchSiteInfoSuccess;

exports.FETCH_SITE_INFO_ERROR = FETCH_SITE_INFO_ERROR;
exports.fetchSiteInfoError    = fetchSiteInfoError;

exports.fetchSiteInfo = fetchSiteInfo;
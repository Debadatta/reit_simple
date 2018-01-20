import spapiToken from './spapiToken';

export function client_url(uri) {
  let uriPath = uri;

  const pattern = /^https?:/;
  if (!pattern.test(uri)) {
    uriPath = uri.startsWith('/') ? uri : `/${uri}`;

    // in dev, use the same host but port 3000
    if (process.env.NODE_ENV === 'development') {
      // use hardcoded endpoint if present
      if (process.env.REACT_APP_API_HOST) {
        return `${process.env.REACT_APP_API_HOST}/spapi${uriPath}`;
      }

      const hostname = window.location.hostname;
      return `http://${hostname}:3000${uriPath}`;
    }
  }

  return `/spapi${uriPath}`;
}

function getDefaultOptions() {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin'
  };
}

function processResponse(response) {
  const json = response.json();

  if (response.status >= 200 && response.status < 300) {
    // always store the most recently returned token to extend the session, as long as it is in use
    json.then(response => {
      // This redirectTo is a temporary hack to redirect non-firm users to old site, and not let them log in.
      if (response && response.meta && response.meta.authToken) {
        localStorage.setItem('jwtToken', response.meta.authToken);
      }
    });

    return json;
  }

  return json.then(err => {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.responseStatus = response.status;
    error.response = err;
    console.log(error); // eslint-disable-line no-console
    throw error;
  });
}

var objectToFormData = function(obj, form, namespace) {
  var fd = form || new FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, formKey);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
};

function buildParam(params, asJSON = true) {
  if (asJSON) {
    return JSON.stringify(params);
  } else {
    return objectToFormData(params);
  }
}

function ajax(uri, options = {}) {
  const defaultOptions = getDefaultOptions();

  options.method = options.method || defaultOptions.method;
  options.headers = options.headers || defaultOptions.headers;
  options.credentials = options.credentials || defaultOptions.credentials;

  const tokenFromStorage = localStorage.getItem('jwtToken');

  if (tokenFromStorage) {
    options.headers['Authorization'] = `Bearer ${tokenFromStorage}`;
  }
  spapiToken({ token: tokenFromStorage, uri: uri, options: options });

  if (options.body) {
    if (options.formData) {
      options.body = buildParam(options.body, false);
    } else {
      options.headers['Content-Type'] = 'application/json; charset=UTF-8';
      options.body = buildParam(options.body);
    }
  }

  return fetch(client_url(uri), options).then(processResponse);
}

export default ajax;

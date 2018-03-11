import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Route } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import thunk from 'redux-thunk';

import App from './components/App';

import * as reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en-US">
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

// logger = middleware
const logger = (store) => {
  // next will let the action continue to the reducer
  return (next) => {
    return (action) => {
      // code we want to run between the action and the reducer
      console.log('[Middleware]', action);
      // will let the action continue to the reducer => next(action)
      const result = next(action);
      console.log('[Middleware state]', state.getState());
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

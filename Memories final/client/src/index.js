import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = legacy_createStore(reducers, {}, compose(applyMiddleware(thunk)));


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
<Provider store={store}>
    <App />
  </Provider>,
);

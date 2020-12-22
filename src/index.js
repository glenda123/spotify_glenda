import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import {createBrowserHistory} from 'history'
import {createHistory} from 'history'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import App from './App';
import reducers from './reducers'
import reportWebVitals from './reportWebVitals';

const history = createHistory()
const middleware = [routerMiddleware(history),thunk];

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={ store}>
    <App history={ history} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

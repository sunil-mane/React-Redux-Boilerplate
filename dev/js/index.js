import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const logger = createLogger();

// Add the reducer to your store on the `routing` key
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
	    <Router history={history}>
	      <Route path="/" component={App}>
	        
	      </Route>
	    </Router>
    </Provider>,
    document.getElementById('root')
);

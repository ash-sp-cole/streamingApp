import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import reducer from './Reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    composeEnhancers(
     applyMiddleware(reduxThunk)));

ReactDOM.render
    (
        <Provider store ={store}>
            <App />
        </Provider>
        , document.getElementById('root'));

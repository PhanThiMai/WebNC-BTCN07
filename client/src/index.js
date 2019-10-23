import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducer/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
require('dotenv').config()

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}> <App /></Provider>,
    document.getElementById('root'));


serviceWorker.unregister();

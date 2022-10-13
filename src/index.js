import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store/reducer/store'
import tkStore from './store/tkStore'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={tkStore}>
        <App />
    </Provider>

);


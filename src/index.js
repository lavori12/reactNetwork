import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import storage from "./redux/state";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App appState={state} dispatch={storage.dispatch.bind(storage)}/>, document.getElementById('root'));
};

storage.subscribe(rerenderEntireTree);

rerenderEntireTree(storage.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

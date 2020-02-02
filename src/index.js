import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from "./redux/state";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

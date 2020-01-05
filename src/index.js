import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './Redux/State'
import { BrowserRouter, Route } from 'react-router-dom';
import {addPost, updateNewPostText} from './Redux/State';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter> 
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// export default rerenderEntireTree;

// ReactDOM.render(
//     <BrowserRouter> 
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>, document.getElementById('root'));
// another way to wrap all App.js into browserRouter

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
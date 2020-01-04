import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import {addPost, updateNewPostText} from './Redux/State';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter> 
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}

export default rerenderEntireTree;
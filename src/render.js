import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import state from './Redux/State';
import {addPost} from './Redux/State';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter> 
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}

export default rerenderEntireTree;
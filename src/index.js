import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogsData = [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
    { id: 4, name: "User Four" },
    { id: 5, name: "User Five" },
    { id: 6, name: "User Six" }
];

let messages = [
    { id: 1, message: "Hi User One" },
    { id: 2, message: "Hellow User Two" },
    { id: 3, message: "Hey User Three" },
    { id: 4, message: "How User Four" },
    { id: 5, message: "Aha User Five" },
    { id: 6, message: "Whatta User Six" }
];

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
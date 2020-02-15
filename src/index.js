import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/reduxStore'
import { BrowserRouter, Route } from 'react-router-dom';
import StoreContext from './StoreContext';
// import {addPost, updateNewPostText} from './Redux/State';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter> 
            <StoreContext.Provider value={store}>
                <App />
            {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> */} //отключили в рамках тестирования контекста
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});

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
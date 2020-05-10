import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
            {/* <App state={state} dispatch={old_Store.dispatch.bind(old_Store)} old_Store={old_Store}/> */}
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// rerenderEntireTree(old_Store.getState());

// old_Store.subscribe(() => {
//     let state = old_Store.getState()
//     rerenderEntireTree(state)
// });

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
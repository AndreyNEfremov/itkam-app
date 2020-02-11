import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setin from './components/Setin/Setin';

const App = (props) => {
  debugger
  return (
    // <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/dialogs'
            render={() => <Dialogs store={props.store}/>}
          />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route
            path='/profile'
            render={() => <Profile 
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} 
              // addPost={props.addPost}
              // updateNewPostText={props.updateNewPostText} 
              />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setin' component={Setin} />
        </div>
      </div>
    // </BrowserRouter>
  )
};

export default App;
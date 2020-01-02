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

  return (
    // <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route
            path='/profile'
            render={() => <Profile 
              state={props.state.profilePage} 
              addPost={props.addPost}/>}
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
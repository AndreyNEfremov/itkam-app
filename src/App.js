import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setin from './components/Setin/Setin';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  // debugger
  return (
    // <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/dialogs'
            render={() => <DialogsContainer />}
          />
          {/* <Route path='/dialogs' component={Dialogs} /> */}
          <Route
            path='/profile/:userId?'
            render={() => <ProfileContainer />}
          />
          <Route
            path='/users'
            render={() => <UsersContainer />}
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
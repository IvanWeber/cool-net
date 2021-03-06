import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';




function App(props) {
  return (
        <div className="superwrapper">
            <div className="wrapper">
                <HeaderContainer />
                <div className='content'>
                    <LeftMenu />
                    <Route path='/feed' component={MainContentWrapper}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
                <Footer />
            </div>
        </div>
  );
}

export default App;

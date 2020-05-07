import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';
// import UserPage from './components/UserPage/UserPage';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';




function App(props) {
  return (
        <div className="superwrapper">
            <div className="wrapper">
                <Header />
            <div className='content'>
                <LeftMenu />
                <Route path='/feed' component={MainContentWrapper}/>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
            </div>
                <Footer />
            </div>
        </div>
  );
}

export default App;

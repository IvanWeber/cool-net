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
    <BrowserRouter>
        <div className="superwrapper">
            <div className="wrapper">
                <Header />
            <div className='content'>
                <LeftMenu />
                <Route path='/feed' component={MainContentWrapper}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
            </div>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
  );
}

{/*<div className="App">*/}
{/*  <header className="App-header">*/}
{/*    <img src={logo} className="App-logo" alt="logo" />*/}
{/*    <p>*/}
{/*      Edit <code>src/App.js</code> and save to reload.*/}
{/*    </p>*/}
{/*    <a*/}
{/*        className="App-link"*/}
{/*        href="https://reactjs.org"*/}
{/*        target="_blank"*/}
{/*        rel="noopener noreferrer"*/}
{/*    >*/}
{/*      Learn React*/}
{/*    </a>*/}
{/*  </header>*/}
{/*</div>*/}

export default App;

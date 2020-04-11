import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainContentWrapper from './components/MainContentWrapper/MainContentWrapper';
import UserPage from './components/UserPage/UserPage';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <div className="superwrapper">
            <div className="wrapper">
                <Header />
            <div className='content'>
                <LeftMenu />
                <Route path='/feed' component={MainContentWrapper}/>
                <Route path='/userpage' component={UserPage}/>
                <Route path='/dialogs' component={Dialogs}/>
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

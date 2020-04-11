import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {

  return (
    <div className="superwrapper">
        <div className="wrapper">
            <Header />
            <Content /> 
            <Footer />
        </div>
    </div>

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

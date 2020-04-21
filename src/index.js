import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  { id: 1, name: 'Андрей'}, 
  { id: 2, name: 'Иван'}, 
  { id: 3, name: 'Анна'}, 
  { id: 4, name: 'Сергей'}
];

let messages = [
  { id: 1, message: 'Hi'}, 
  { id: 2, message: 'How are you?'}, 
  { id: 3, message: 'Yo yo'}, 
  { id: 4, message: "I'm okay"}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

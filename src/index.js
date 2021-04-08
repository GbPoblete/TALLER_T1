import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar'
import EpisodesBreaking from './components/Episodes_breaking';
import EpisodesCall from './components/Episodes_call'



//ReactDOM.render(
//  <Navbar/>,
//  document.getElementById('root')
//);

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <EpisodesBreaking/>
    <EpisodesCall/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

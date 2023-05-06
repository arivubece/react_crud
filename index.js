import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class Index extends Component {

  render() {
    return(
      <div>
        <h1>CRUD Operations</h1>
        <App />
      </div>
      
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Index />
  </React.StrictMode>
);

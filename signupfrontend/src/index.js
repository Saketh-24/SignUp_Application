import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navibar from './Components/NavigationBar/navibar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navibar/>
    <App />
  </React.StrictMode>
);

 

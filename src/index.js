import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Buttons from './components/Buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
    <Buttons/>
  </React.StrictMode>
);


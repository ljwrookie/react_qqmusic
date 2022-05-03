import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@/assets/css/reset.css';
import '@/assets/css/antd.css';
if (localStorage.getItem('Dark') === undefined)
    localStorage.setItem('Dark', false);
ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import Game from './Game'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div >
    <Game />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* now all answers in 1 question is choosed all will be choosed because its all same id when yo pull it from an api you need to modfy that so only 1 answer could be choosen good luck*/
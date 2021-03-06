import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './5.components/Menu'
import data from "./data/recipes.json"
import App2 from './6.components/App';

import StarRating from "./6.components/StarRating"
import AddColorForm from "./6.form/AddColorForm"

ReactDOM.render(
  <React.StrictMode>
    <AddColorForm />
    <App2 />
    <StarRating />
    <Menu recipes={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

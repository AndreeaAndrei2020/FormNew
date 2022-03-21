import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import About from './About';
import ProjectForm from './ProjectForm';
ReactDOM.render(
  <BrowserRouter>
    <ProjectForm />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();

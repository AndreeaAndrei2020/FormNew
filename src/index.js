import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectForm from './ProjectForm';
import Home from './components/Home'
import Pages from './components/routes/pages'
import Page from './components/routes/Page'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path='/form' element={<ProjectForm />} />
        <Route path='/home' element={<Home />} />
        <Route path="/pages" element={<Pages />} >
          <Route path=":pageId" element={<Page />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>404</h1>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);


reportWebVitals();

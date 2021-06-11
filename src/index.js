import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AirCncProvider } from './Context';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AirCncProvider>
      <Router>
        <App />
      </Router>
    </AirCncProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

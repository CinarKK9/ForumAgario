import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login'
import { Navbar } from './App';
import { Footer } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const signInButton = document.getElementById('SignIn');
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from 'redux/store';
import './assets/styles/index.scss'
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider store={store}>
      <App />
       </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

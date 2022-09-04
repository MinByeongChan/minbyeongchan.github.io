// dependency
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'jotai';
import './index.scss';
import './prism-a11y-dark.scss';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@utils/Config';

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

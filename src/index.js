import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Assets/styles/global.css';
// index.js or index.tsx
import '@fontsource/inter'; // Defaults to regular weight and normal style
import '@fontsource/inter/400.css'; // Regular weight
import '@fontsource/inter/700.css'; // Bold weight
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

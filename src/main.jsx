import React from 'react'
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import App from './App'

export const server = "http://localhost:4000/api/v1"

const root =createRoot(document.getElementById('root'));

const rootElement=(
  <React.StrictMode>
    <App/>
  </React.StrictMode>

);

root.render(rootElement);

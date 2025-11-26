import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Console Easter Egg
console.log('%cNETSHX LTD', 'color: #00ff9d; font-size: 24px; font-weight: bold; font-family: monospace;');
console.log('%cSecuring Systems, Auditing Contracts, Building the Future', 'color: #a0a0a0; font-size: 12px;');
console.log('%cInterested in our services? Contact us at gruchathi@gmail.com', 'color: #00ff9d; font-size: 12px;');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


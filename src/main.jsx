import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //The strict mode here in react executes eacch of the component twice in the order to get 
  //any error and so that we can find it and evaluate and correct it
  //It is the strict mode in react which helps us to know that we have a bug into the code
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

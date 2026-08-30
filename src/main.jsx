import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/css/style.css'

// vite.config.js sets base: '/javapath/javapathapp/' so the app is served
// from that sub-path. BrowserRouter must use the same basename so that
// route matching strips the prefix (otherwise no route matches and the
// app renders as a blank page).
const BASE = import.meta.env.BASE_URL || '/javapath/javapathapp/'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
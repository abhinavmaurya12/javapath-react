import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/css/style.css'

// vite.config.js sets base: '/javapath/javapathapp/' for local dev. For the
// GitHub Pages deployment of this repo the app is served from the repo root
// (base '/javapath-react/'), so the router basename must match the build base
// or no route matches and the app renders as a blank page.
const BASE = import.meta.env.BASE_URL || '/javapath/javapathapp/'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
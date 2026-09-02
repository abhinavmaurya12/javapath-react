import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/css/style.css'
import './assets/css/coding-practice.css'

// vite.config.js sets base: '/javapath/javapathapp/' for local dev. For the
// GitHub Pages deployment of this repo the app is served from the repo root
// (base '/javapath-react/'), so the router basename must match the build base
// or no route matches and the app renders as a blank page.
const BASE = import.meta.env.BASE_URL || '/javapath/javapathapp/'

// Wrapper that removes the themed splash screen only *after* React has
// committed its first render. Removing it before render() leaves #app empty
// for a moment, which flashes white (light mode) / black (dark mode).
function AppShell({ children }) {
  useEffect(() => {
    const loader = document.getElementById('appLoader')
    if (loader) loader.remove()
  }, [])
  return children
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE}>
      <AppShell>
        <App />
      </AppShell>
    </BrowserRouter>
  </React.StrictMode>
)
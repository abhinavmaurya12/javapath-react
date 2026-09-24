import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SUB_NAV = [
  { label: 'Start Learning Java', to: '/java', icon: 'fa-brands fa-java' },
  { label: 'Start DSA', to: '/dsa', icon: 'fa-project-diagram' },
  { label: 'Learn Frontend', to: '/frontend', icon: 'fab fa-html5' },
  { label: 'CodeArena', to: '/codearena', icon: 'fa-trophy' },
  { label: 'Quick Learn', to: '/quick-learn', icon: 'fa-bolt' },
  { label: 'E-Book', to: '/ebook', icon: 'fa-book' },
  { label: 'CodeSqz', to: '/codesqz', icon: 'fa-book-open' },
  { label: 'My Notes', to: '/mynotes', icon: 'fas fa-sticky-note' }
]

const THEME_PAINT = {
  dark: { bg: '#0b1220', text: '#e8eefc' },
  light: { bg: '#f8fafc', text: '#0f172a' }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  const paint = THEME_PAINT[theme] || THEME_PAINT.light
  document.documentElement.style.background = paint.bg
  document.documentElement.style.color = paint.text
  if (document.body) {
    document.body.style.background = paint.bg
    document.body.style.color = paint.text
  }
}

export default function SubNav() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => {
    const t = localStorage.getItem('theme')
    return (t !== 'dark' && t !== 'light') ? 'light' : t
  })

  // Keep this toggle in sync with the Navbar toggle (both share the same
  // theme source via the 'themechange' custom event).
  useEffect(() => {
    function onThemeChange(e) { setTheme(e.detail.theme) }
    window.addEventListener('themechange', onThemeChange)
    return () => window.removeEventListener('themechange', onThemeChange)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }))
  }

  function isActive(to) {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to || location.pathname.startsWith(to + '/')
  }

  return (
    <nav className="sub-nav">
      {/* Mobile-only theme toggle pinned to the LEFT of the sub-nav bar. */}
      <button
        className="sub-nav-theme-btn"
        onClick={toggleTheme}
        title={theme.charAt(0).toUpperCase() + theme.slice(1) + ' Mode'}
        aria-label="Toggle theme"
      >
        <i className={'fas ' + (theme === 'dark' ? 'fa-moon' : 'fa-sun')}></i>
        <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </button>
      <div className="sub-nav-inner">
        {SUB_NAV.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={'sub-nav-item' + (isActive(item.to) ? ' active' : '')}
          >
            <i className={'fas ' + item.icon}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
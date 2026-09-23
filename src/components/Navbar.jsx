import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  // { label: 'Quick Learn', to: '/quick-learn' },
  { label: 'Java', to: '/java' },
  { label: 'DSA', to: '/dsa' },
  { label: 'CodeArena', to: '/coding-practice' },
   { label: 'Interview', to: '/interview' },
  { label: 'Program', to: '/practice' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Book', to: '/javapro' },
  // { label: 'E-Book', to: '/ebook' },
  { label: 'Compiler', to: '/tryit' },
  // { label: 'JavaSquadz', to: 'https://github.com/abhinavmaurya12/JavaSquadz', external: true },
]

const FRONTEND_DROPDOWN = [
  { label: 'HTML', to: '/frontend/html' },
  { label: 'CSS', to: '/frontend/css' },
  { label: 'JavaScript', to: '/frontend/javascript' },
  { label: 'React', to: '/frontend/react' },
]

// index.html paints <html>/<body> inline so a refresh never flashes the wrong
// theme before the CSS variables load. Those inline styles must be re-applied
// on every theme switch, otherwise the stale background/color overrides the
// CSS variables and the page keeps the old theme until the next reload.
const THEME_PAINT = {
  dark: { bg: '#0b1220', text: '#e8eefc' },
  light: { bg: '#f8fafc', text: '#0f172a' },
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

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    const t = localStorage.getItem('theme')
    return (t !== 'dark' && t !== 'light') ? 'light' : t
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Keep this toggle in sync with the mobile SubNav theme toggle.
  useEffect(() => {
    function onThemeChange(e) { setTheme(e.detail.theme) }
    window.addEventListener('themechange', onThemeChange)
    return () => window.removeEventListener('themechange', onThemeChange)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
    // Keep the mobile SubNav theme toggle in sync with this one.
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }))
  }

  function closeAll() {
    setMenuOpen(false)
    setDropdownOpen(false)
    document.body.removeAttribute('data-subnav-hidden')
  }

  function toggleMenu() {
    setMenuOpen(o => {
      const next = !o
      // When the mobile nav-links menu opens it covers the sub-nav bar, so
      // hide the sub-nav to avoid a stacked/overlapping mess.
      if (next) document.body.setAttribute('data-subnav-hidden', '1')
      else document.body.removeAttribute('data-subnav-hidden')
      setDropdownOpen(false)
      return next
    })
  }

  // Close mobile menu + dropdowns on resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) { setMenuOpen(false); setDropdownOpen(false) }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close menu on outside click for mobile
  useEffect(() => {
    if (!menuOpen) return
    function onClick(e) {
      const nav = document.getElementById('navLinks')
      if (nav && !nav.contains(e.target)) { setMenuOpen(false); setDropdownOpen(false) }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [menuOpen])

  function isActive(to) {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to || location.pathname.startsWith(to + '/')
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <i className="fa-brands fa-java"></i> JavaNest <span className="nav-version">Vr.7.2.2</span>
      </div>
      <button className="mobile-menu-btn" onClick={e => { e.stopPropagation(); toggleMenu() }}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={'nav-links' + (menuOpen ? ' open' : '')} id="navLinks">
        {NAV_ITEMS.map(item => (
          item.external ? (
            <a key={item.to} href={item.to} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
              <i className="fab fa-github"></i> {item.label}
            </a>
          ) : (
            <Link key={item.to} to={item.to} onClick={closeAll} className={isActive(item.to) ? 'active' : ''}>
              {item.label}
            </Link>
          )
        ))}
        {menuOpen ? (
          FRONTEND_DROPDOWN.map(item => (
            <Link key={item.to} to={item.to} onClick={closeAll} className={isActive(item.to) ? 'active' : ''}>
              {item.label}
            </Link>
          ))
        ) : (
          <div className={'nav-dropdown' + (dropdownOpen ? ' open' : '')}>
            <span
              style={{ padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text)' }}
              onClick={e => { e.stopPropagation(); setDropdownOpen(!dropdownOpen) }}
            >
              Frontend <i className="fas fa-chevron-down" style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}></i>
            </span>
            <div className="dropdown-menu">
              {FRONTEND_DROPDOWN.map(item => (
                <Link key={item.to} to={item.to} onClick={closeAll}>{item.label}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="nav-right">
        <Search />
        <button className="theme-btn" onClick={toggleTheme} title={theme.charAt(0).toUpperCase() + theme.slice(1) + ' Mode'}>
          <i className={'fas ' + (theme === 'dark' ? 'fa-moon' : 'fa-sun')}></i>
        </button>
      </div>
    </nav>
  )
}
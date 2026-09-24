import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SUB_NAV = [
  { label: 'Start Learning Java', to: '/java', icon: 'fa-brands fa-java' },
  { label: 'Start DSA', to: '/dsa', icon: 'fa-project-diagram' },
  { label: 'Learn Frontend', to: '/frontend', icon: 'fab fa-html5' },
  { label: 'CodeArena', to: '/codearena', icon: 'fa-trophy' },
  { label: 'Quick Learn', to: '/quick-learn', icon: 'fa-bolt' },
  { label: 'E-Book', to: '/ebook', icon: 'fa-book' },
  { label: 'CodeSqz', to: '/codesqz', icon: 'fa-book-open' },
  { label: 'My Notes', to: '/mynotes', icon: 'fas fa-sticky-note' },
  { label: 'JavaSquadz', to: 'https://github.com/abhinavmaurya12/JavaSquadz', external: true, icon: 'fab fa-github' }
]

export default function HomeSubNav() {
  const location = useLocation()

  function isActive(to) {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to || location.pathname.startsWith(to + '/')
  }

  return (
    <aside className="home-subnav">
      <div className="home-subnav-inner">
        <div className="home-subnav-title"><i className="fas fa-route"></i> Quick Access</div>
        {SUB_NAV.map(item => (
          item.external ? (
            <a
              key={item.to}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="home-subnav-item"
            >
              <span className="home-subnav-icon"><i className={'fas ' + item.icon}></i></span>
              <span className="home-subnav-label">{item.label}</span>
            </a>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              className={'home-subnav-item' + (isActive(item.to) ? ' active' : '')}
            >
              <span className="home-subnav-icon"><i className={'fas ' + item.icon}></i></span>
              <span className="home-subnav-label">{item.label}</span>
            </Link>
          )
        ))}
      </div>
    </aside>
  )
}
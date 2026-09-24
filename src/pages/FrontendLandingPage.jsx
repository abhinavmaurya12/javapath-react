import React from 'react'
import { Link } from 'react-router-dom'
import { frontendTracks } from '../data'

const CHAPTER_COUNTS = { html: 6, css: 8, javascript: 10, react: 8 }

const TRACK_ORDER = ['html', 'css', 'javascript', 'react']

const META = {
  html: { desc: 'Learn the skeleton of the web — tags, structure, and semantic markup.', color: '#e34f26' },
  css: { desc: 'Style your pages — layout, colors, animations, and responsive design.', color: '#563d7c' },
  javascript: { desc: 'Add interactivity and logic — the programming language of the browser.', color: '#f7df1e' },
  react: { desc: 'Build modern UIs with components, hooks, and the React ecosystem.', color: '#61dafb' },
}

export default function FrontendLandingPage() {
  return (
    <div className="section" style={{ paddingTop: 100 }}>
      <div className="section-title">
        <h2><i className="fas fa-laptop-code" style={{ color: 'var(--primary)' }}></i> Learn Frontend</h2>
        <p>Master the three core web technologies plus the React framework</p>
      </div>
      <div className="frontend-landing-grid" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
        {TRACK_ORDER.map(track => {
          const data = frontendTracks[track]
          if (!data) return null
          const count = CHAPTER_COUNTS[track] || (data.chapters && data.chapters.length) || 0
          const meta = META[track]
          return (
            <Link key={track} to={'/frontend/' + track} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="frontend-landing-card" style={{ borderLeft: `4px solid ${data.color || meta.color}` }}>
                <div className="frontend-landing-icon" style={{ background: (data.color || meta.color) + '22', color: data.color || meta.color }}>
                  <i className={data.icon || 'fas fa-code'}></i>
                </div>
                <h3 style={{ margin: '8px 0 4px' }}>{data.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', margin: '0 0 12px' }}>{meta.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="badge beginner">{count} Chapters</span>
                  <i className="fas fa-arrow-right" style={{ color: 'var(--primary)', fontSize: '.85rem' }}></i>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { frontendTracks } from '../data'
import SafeHTML from '../components/SafeHTML'
import VoiceReader from '../components/VoiceReader'

const CHAPTER_COUNTS = { html: 6, css: 8, javascript: 10, react: 8 }

export default function FrontendPage() {
  const { track } = useParams()
  const [active, setActive] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const { frontendCompleted, markFrontendComplete, setLast, checkBadges } = useProgressContext()

  const data = frontendTracks[track]
  const chapters = (data && data.chapters) || []

  useEffect(() => {
    checkBadges()
  }, [checkBadges])

  useEffect(() => {
    const st = location.state
    if (st && typeof st.chapter !== 'undefined' && st.chapter != null) {
      setActive(st.chapter)
    }
  }, []) // eslint-disable-line

  function showChapter(idx) {
    setActive(idx)
    navigate('/frontend/' + track, { state: { chapter: idx } })
    const ch = chapters[idx]
    if (ch) setLast(track + '-' + idx, ch.title)
    // Close the mobile sidebar after selecting a chapter
    const s = document.getElementById(track + 'Sidebar')
    const b = document.getElementById('frontendBackdrop-' + track)
    if (s) s.classList.remove('open')
    if (b) b.classList.remove('open')
  }

  function markComplete() {
    markFrontendComplete(track, active)
    checkBadges()
  }

  useEffect(() => {
    window.__feShow = (idx) => showChapter(idx)
    window.__feMark = (idx) => markFrontendComplete(track, idx)
    return () => {
      delete window.__feShow
      delete window.__feMark
    }
  }, [active, track]) // eslint-disable-line

  const isComplete = frontendCompleted[track] && frontendCompleted[track].includes(active)
  const chapter = chapters[active]

  if (!data) {
    return <div className="section"><div className="section-title"><h2>Track not found</h2></div></div>
  }

  const sections = chapters.reduce((acc, ch, i) => {
    const diff = ch.difficultyClass || 'beginner'
    let label = diff === 'beginner' ? 'Beginner' : diff === 'intermediate' ? 'Intermediate' : 'Advanced'
    if (!acc[label]) acc[label] = []
    acc[label].push(i)
    return acc
  }, {})

  return (
    <div className="frontend-layout">
      <aside className="frontend-sidebar" id={track + 'Sidebar'} style={{ overflowY: 'auto' }}>
        <div className="search-sidebar" style={{ position: 'relative', padding: '8px 12px', borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
          <i className="fas fa-search" style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }}></i>
          <input type="text" placeholder={'Search ' + data.title + ' chapters...'} id={track + 'SearchInput'} className="sidebar-search-input" style={{ width: '100%', padding: '8px 12px 8px 32px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: 8, fontSize: '.85rem', outline: 'none' }} />
        </div>
        <ul className="sidebar-section" id={track + 'SidebarList'} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {Object.keys(sections).map(label => (
            <li key={label} style={{ margin: 0 }}>
              <span className="sidebar-section-title">{label}</span>
              {sections[label].map(i => (
                <li key={i} style={{ margin: 0 }}>
                  <a
                    href={'#chapter-' + i}
                    onClick={e => { e.preventDefault(); showChapter(i) }}
                    className={'sidebar-item' + (active === i ? ' active' : '')}
                  >
                    <i className="fas fa-book"></i> Ch{i + 1}: {chapters[i].title}
                  </a>
                </li>
              ))}
            </li>
          ))}
        </ul>
      </aside>
      <main className="frontend-main" id={'frontendMain-' + track} style={{ flex: 1, padding: 32 }}>
        <button className="sidebar-toggle-btn" onClick={() => {
          const s = document.getElementById(track + 'Sidebar')
          const b = document.getElementById('frontendBackdrop-' + track)
          const open = s && s.classList.toggle('open')
          if (b) b.classList.toggle('open', !!open)
        }}><i className="fas fa-bars"></i> Chapters</button>
        <div className="frontend-container" id={'frontendContainer-' + track}>
          {chapter ? (
            <>
              <div className="frontend-header">
                <h1>Ch{active + 1}: {chapter.title}</h1>
                <span className={'badge ' + (chapter.difficultyClass || 'beginner')}>{chapter.difficulty || 'Beginner'}</span>
              </div>
              <VoiceReader text={chapter.content} title={'Ch' + (active + 1) + ': ' + chapter.title} />
              <SafeHTML html={chapter.content} />
              <div className="frontend-nav" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
                {active > 0 ? (
                  <button className="btn btn-outline" onClick={() => showChapter(active - 1)}><i className="fas fa-arrow-left"></i> Previous</button>
                ) : <span></span>}
                <button className={'btn ' + (isComplete ? 'btn-secondary' : 'btn-outline')} onClick={markComplete}>
                  <i className="fas fa-check"></i> {isComplete ? 'Completed' : 'Mark Complete'}
                </button>
                {active < chapters.length - 1 ? (
                  <button className="btn btn-primary" onClick={() => showChapter(active + 1)}>Next <i className="fas fa-arrow-right"></i></button>
                ) : <span></span>}
              </div>
            </>
          ) : (
            <div className="empty-state"><i className="fas fa-book-open"></i><h3>Chapter not found</h3></div>
          )}
        </div>
      </main>
      <div className="frontend-sidebar-backdrop" id={'frontendBackdrop-' + track} onClick={() => {
        const s = document.getElementById(track + 'Sidebar')
        if (s) s.classList.remove('open')
        const b = document.getElementById('frontendBackdrop-' + track)
        if (b) b.classList.remove('open')
      }}></div>
    </div>
  )
}
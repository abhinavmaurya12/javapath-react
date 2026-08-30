import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { lessons } from '../data'
import SafeHTML from '../components/SafeHTML'

const SECTIONS = [
  { title: 'Fundamentals', range: [0, 2] },
  { title: 'OOP Concepts', range: [3, 8] },
  { title: 'Advanced', range: [9, 14] }
]

export default function JavaPage() {
  const [active, setActive] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const { javaCompleted, markJavaComplete, setLast, checkBadges } = useProgressContext()

  useEffect(() => {
    const st = location.state
    if (st && typeof st.question !== 'undefined' && st.question != null) {
      setActive(st.question)
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    checkBadges()
  }, [checkBadges])

  function showLesson(idx) {
    setActive(idx)
    navigate('/java', { state: { lesson: idx } })
    const l = lessons[idx]
    if (l) setLast(idx, l.title)
  }

  function markComplete() {
    markJavaComplete(active)
    checkBadges()
  }

  const lesson = lessons[active]
  const isComplete = javaCompleted.includes(active)

  // Wire global handlers so inline onclick handlers inside SafeHTML work
  useEffect(() => {
    window.__javaPrev = (i) => showLesson(i)
    window.__javaNext = (i) => showLesson(i)
    window.__javaMark = (i) => markComplete
    return () => {
      delete window.__javaPrev
      delete window.__javaNext
      delete window.__javaMark
    }
  }, [active]) // eslint-disable-line

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="sidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search chapters..." id="learnSearchInput" />
        </div>
        {SECTIONS.map(sec => (
          <div className="sidebar-section" key={sec.title}>
            <div className="sidebar-section-title">{sec.title}</div>
            {lessons.slice(sec.range[0], sec.range[1] + 1).map((l, i) => {
              const idx = sec.range[0] + i
              return (
                <div
                  key={idx}
                  className={'sidebar-item' + (active === idx ? ' active' : '')}
                  onClick={() => showLesson(idx)}
                >
                  <i className="fas fa-book"></i> Ch{idx + 1}: {l.title}
                </div>
              )
            })}
          </div>
        ))}
      </aside>
      <main className="main-content" id="mainContent">
        <button className="sidebar-toggle-btn" onClick={() => {
          const s = document.getElementById('sidebar')
          if (s) s.classList.toggle('open')
        }}><i className="fas fa-bars"></i> Chapters</button>
        <div className="lesson-container" id="lessonContainer">
          {lesson ? (
            <>
              <div className="lesson-header">
                <h1>Chapter {active + 1}: {lesson.title}</h1>
                <span className={'badge ' + lesson.badgeClass}>{lesson.difficulty}</span>
              </div>
              <SafeHTML html={lesson.content} />
              <div className="lesson-nav" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
                {active > 0 ? (
                  <button className="btn btn-outline" onClick={() => showLesson(active - 1)}><i className="fas fa-arrow-left"></i> Previous</button>
                ) : <span></span>}
                <button className={'btn ' + (isComplete ? 'btn-secondary' : 'btn-outline')} onClick={markComplete}>
                  <i className="fas fa-check"></i> {isComplete ? 'Completed' : 'Mark Complete'}
                </button>
                {active < lessons.length - 1 ? (
                  <button className="btn btn-primary" onClick={() => showLesson(active + 1)}>Next <i className="fas fa-arrow-right"></i></button>
                ) : <span></span>}
              </div>
            </>
          ) : (
            <div className="empty-state"><i className="fas fa-book-open"></i><h3>Lesson not found</h3></div>
          )}
        </div>
      </main>
    </div>
  )
}
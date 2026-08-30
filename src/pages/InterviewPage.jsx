import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { interviewQuestions } from '../data'
import SafeHTML from '../components/SafeHTML'

export default function InterviewPage() {
  const [active, setActive] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const { interviewCompleted, markInterviewComplete, setLast, checkBadges } = useProgressContext()

  useEffect(() => { checkBadges() }, [checkBadges])

  useEffect(() => {
    const st = location.state
    if (st && typeof st.question !== 'undefined' && st.question != null) {
      setActive(st.question - 1)
    }
  }, []) // eslint-disable-line

  function showQuestion(id) {
    const idx = id - 1
    setActive(idx)
    navigate('/interview', { state: { question: id } })
    const q = interviewQuestions[idx]
    if (q) setLast('interview-' + id, q.title)
  }

  function markComplete() {
    const q = interviewQuestions[active]
    if (q) {
      markInterviewComplete(q.id)
      checkBadges()
    }
  }

  useEffect(() => {
    window.__ivShow = (id) => showQuestion(id)
    window.__ivMark = (id) => markInterviewComplete(id)
    return () => {
      delete window.__ivShow
      delete window.__ivMark
    }
  }, [active]) // eslint-disable-line

  const q = interviewQuestions[active]
  const isCompleted = q ? interviewCompleted.includes(q.id) : false

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="interviewSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search questions..." id="interviewSearchInput" />
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Phase 1 — Java Core (51 Q)</div>
          <div id="interviewSidebarList">
            {interviewQuestions.map(qq => (
              <div
                key={qq.id}
                className={'sidebar-item' + (active === qq.id - 1 ? ' active' : '')}
                onClick={() => showQuestion(qq.id)}
              >
                <i className="fas fa-comments"></i> Q{qq.id}: {qq.title}
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="main-content" id="interviewMainContent">
        <button className="sidebar-toggle-btn" onClick={() => {
          const s = document.getElementById('interviewSidebar')
          if (s) s.classList.toggle('closed')
        }}><i className="fas fa-bars"></i> Questions</button>
        <div className="lesson-container" id="interviewContainer">
          {q ? (
            <>
              <div className="lesson-header">
                <h1>Q{q.id}: {q.title}</h1>
                {isCompleted ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 8, background: '#27ae60', color: '#fff', fontSize: '.85rem', fontWeight: 600 }}>
                    <i className="fas fa-check-circle"></i> Completed
                  </span>
                ) : (
                  <button className="btn btn-primary" onClick={markComplete}><i className="fas fa-check"></i> Mark Complete</button>
                )}
              </div>
              <SafeHTML html={q.content} />
            </>
          ) : (
            <div className="empty-state"><i className="fas fa-comments"></i><h3>No question selected</h3></div>
          )}
        </div>
      </main>
    </div>
  )
}
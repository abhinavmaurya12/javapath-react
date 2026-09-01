import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { interviewQuestions } from '../data'
import SafeHTML from '../components/SafeHTML'
import VoiceReader from '../components/VoiceReader'
import useSidebarSearch from '../hooks/useSidebarSearch'

export default function InterviewPage() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState({ p1: false, p2: false, p3: false })
  const location = useLocation()
  const navigate = useNavigate()
  const { interviewCompleted, markInterviewComplete, setLast, checkBadges } = useProgressContext()

  useEffect(() => { checkBadges() }, [checkBadges])

  useEffect(() => {
    const st = location.state
    if (st && typeof st.question !== 'undefined' && st.question != null) {
      const id = st.question
      setActive(id - 1)
      setExpanded({ p1: false, p2: false, p3: false, [id <= 51 ? 'p1' : id <= 121 ? 'p2' : 'p3']: true })
    }
  }, []) // eslint-disable-line

  function togglePhase(key) {
    setExpanded(e => {
      const next = { p1: false, p2: false, p3: false, [key]: !e[key] }
      return next
    })
  }

  function showQuestion(id) {
    const idx = id - 1
    setActive(idx)
    const phase = id <= 51 ? 'p1' : id <= 121 ? 'p2' : 'p3'
    setExpanded({ p1: false, p2: false, p3: false, [phase]: true })
    navigate('/interview', { state: { question: id } })
    const q = interviewQuestions[idx]
    if (q) setLast('interview-' + id, q.title)
    const s = document.getElementById('interviewSidebar')
    if (s) s.classList.remove('open')
    const b = document.getElementById('interviewSidebarBackdrop')
    if (b) b.classList.remove('open')
  }

  function toggleSidebar() {
    const s = document.getElementById('interviewSidebar')
    const b = document.getElementById('interviewSidebarBackdrop')
    if (s) s.classList.toggle('open')
    if (b) b.classList.toggle('open')
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

  useSidebarSearch()

  const q = interviewQuestions[active]
  const isCompleted = q ? interviewCompleted.includes(q.id) : false

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="interviewSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search questions..." id="interviewSearchInput" className="sidebar-search-input" />
        </div>
        <div className="sidebar-section">
          <button
            className="phase-toggle-btn"
            onClick={() => togglePhase('p1')}
            aria-expanded={expanded.p1}
          >
            <i className={'fas ' + (expanded.p1 ? 'fa-chevron-down' : 'fa-chevron-right')}></i>
            Phase 1 — Java Que ({interviewQuestions.filter(q => q.id <= 51).length} Q)
          </button>
          {expanded.p1 && (
            <div id="interviewSidebarList">
              {interviewQuestions.filter(q => q.id <= 51).map(qq => (
                <div
                  key={qq.id}
                  className={'sidebar-item' + (active === qq.id - 1 ? ' active' : '')}
                  onClick={() => showQuestion(qq.id)}
                >
                  <i className="fas fa-comments"></i> Q{qq.id}: {qq.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="sidebar-section">
          <button
            className="phase-toggle-btn"
            onClick={() => togglePhase('p2')}
            aria-expanded={expanded.p2}
          >
            <i className={'fas ' + (expanded.p2 ? 'fa-chevron-down' : 'fa-chevron-right')}></i>
            Phase 2 — Array Que ({interviewQuestions.filter(q => q.id > 51 && q.id <= 121).length} Q)
          </button>
          {expanded.p2 && (
            <div id="interviewSidebarListPhase2">
              {interviewQuestions.filter(q => q.id > 51 && q.id <= 121).map(qq => (
                <div
                  key={qq.id}
                  className={'sidebar-item' + (active === qq.id - 1 ? ' active' : '')}
                  onClick={() => showQuestion(qq.id)}
                >
                  <i className="fas fa-comments"></i> Q{qq.id}: {qq.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="sidebar-section">
          <button
            className="phase-toggle-btn"
            onClick={() => togglePhase('p3')}
            aria-expanded={expanded.p3}
          >
            <i className={'fas ' + (expanded.p3 ? 'fa-chevron-down' : 'fa-chevron-right')}></i>
            Phase 3 — Pattern Que ({interviewQuestions.filter(q => q.id > 121).length} Q)
          </button>
          {expanded.p3 && (
            <div id="interviewSidebarListPhase3">
              {interviewQuestions.filter(q => q.id > 121).map(qq => (
                <div
                  key={qq.id}
                  className={'sidebar-item' + (active === qq.id - 1 ? ' active' : '')}
                  onClick={() => showQuestion(qq.id)}
                >
                  <i className="fas fa-comments"></i> Q{qq.id}: {qq.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
      <main className="main-content" id="interviewMainContent">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}><i className="fas fa-bars"></i> Questions</button>
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
              <VoiceReader text={q.title + '. ' + q.content} title={'Q' + q.id + ': ' + q.title} />
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
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { javaproData } from '../data'
import SafeHTML from '../components/SafeHTML'

export default function JavaProPage() {
  const [activeId, setActiveId] = useState(1)
  const location = useLocation()
  const navigate = useNavigate()
  const { setLast } = useProgressContext()

  useEffect(() => {
    const st = location.state
    if (st && typeof st.chapter !== 'undefined' && st.chapter != null) {
      setActiveId(st.chapter)
    }
  }, []) // eslint-disable-line

  function showChapter(id) {
    setActiveId(id)
    navigate('/javapro', { state: { chapter: id } })
    const ch = javaproData.find(c => c.id === id)
    if (ch) setLast('javapro-' + id, ch.title)
  }

  useEffect(() => {
    window.__jpShow = (id) => showChapter(id)
    return () => { delete window.__jpShow }
  }, [activeId]) // eslint-disable-line

  const ch = javaproData.find(c => c.id === activeId)

  // Split content into paragraphs / code blocks like javapro-app.js does
  function renderContent(text) {
    if (!text) return ''
    const lines = text.split('\n')
    let html = ''
    let inCode = false
    let codeLines = []
    function flushCode() {
      if (codeLines.length) {
        html += '<div class="code-block"><div class="code-header"><span> Java</span></div><pre><code>' +
          codeLines.join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
          '</code></pre></div>'
        codeLines = []
      }
    }
    lines.forEach(line => {
      const trimmed = line.trim()
      if (trimmed.startsWith('```')) {
        if (inCode) { flushCode(); inCode = false }
        else { inCode = true }
        return
      }
      if (inCode) { codeLines.push(line); return }
      if (trimmed === '') { html += '<p>&nbsp;</p>'; return }
      if (/^Section\s+[\d.]+:/.test(trimmed)) {
        html += '<h3 style="color:var(--primary);margin:16px 0 8px">' + trimmed + '</h3>'
        return
      }
      html += '<p>' + trimmed.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>'
    })
    flushCode()
    return html
  }

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="javaproSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search book chapters..." id="javaproSearchInput" />
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">JavaPro Book (180 Chapters)</div>
          <div id="javaproChapterList">
            {javaproData.map(c => (
              <div
                key={c.id}
                className={'sidebar-item' + (activeId === c.id ? ' active' : '')}
                onClick={() => showChapter(c.id)}
              >
                <i className="fas fa-book"></i> Ch{c.id}: {c.title}
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="main-content" id="javaproMainContent">
        <button className="sidebar-toggle-btn" onClick={() => {
          const s = document.getElementById('javaproSidebar')
          if (s) s.classList.toggle('closed')
        }}><i className="fas fa-bars"></i> Chapters</button>
        <div className="lesson-container" id="javaproContainer">
          {ch ? (
            <>
              <div className="lesson-header">
                <h1>Ch{ch.id}: {ch.title}</h1>
              </div>
              <div className="concept-box">
                <p>Complete Java reference book chapter. Extracted from JavaNotesForProfessionals.pdf.</p>
              </div>
              <SafeHTML html={renderContent(ch.content)} />
            </>
          ) : (
            <div className="empty-state"><i className="fas fa-book-open"></i><h3>Chapter not found</h3></div>
          )
          }
        </div>
      </main>
    </div>
  )
}
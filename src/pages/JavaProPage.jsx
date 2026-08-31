import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { javaproData } from '../data'
import SafeHTML from '../components/SafeHTML'
import VoiceReader from '../components/VoiceReader'
import useSidebarSearch from '../hooks/useSidebarSearch'

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
    const s = document.getElementById('javaproSidebar')
    if (s) s.classList.remove('open')
    const b = document.getElementById('javaproSidebarBackdrop')
    if (b) b.classList.remove('open')
  }

  function toggleSidebar() {
    const s = document.getElementById('javaproSidebar')
    const b = document.getElementById('javaproSidebarBackdrop')
    if (s) s.classList.toggle('open')
    if (b) b.classList.toggle('open')
  }

  useEffect(() => {
    window.__jpShow = (id) => showChapter(id)
    return () => { delete window.__jpShow }
  }, [activeId]) // eslint-disable-line

  useSidebarSearch()

  const ch = javaproData.find(c => c.id === activeId)

  // Split content into paragraphs / code blocks like javapro-app.js does.
  // Code detection mirrors the reference site: a line is code if it matches a
  // Java keyword / symbol pattern, otherwise it is prose.
  const codeKeywords = ['public', 'private', 'static', 'protected', 'class', 'interface', 'import', 'package', 'void', 'int', 'String', 'boolean', 'char', 'byte', 'short', 'long', 'float', 'double', 'return', 'if', 'for', 'while', 'try', 'catch', 'else', 'switch', 'case', 'break', 'continue', 'new', 'throw', 'throws', 'final', 'abstract', 'synchronized', 'transient', 'volatile', 'native', 'strictfp', 'assert', 'enum', 'extends', 'implements', 'instanceof', 'super', 'this', 'true', 'false', 'null', 'do', 'const']
  function isCode(line) {
    const t = line.trim()
    if (!t) return false
    if (t.startsWith('//') || t.startsWith('/*') || t.startsWith('*') || t.startsWith('@')) return true
    if (t === '{' || t === '}' || t === ';') return true
    const first = t.split(/\s+/)[0]
    if (codeKeywords.includes(first)) return true
    if (/^System\.(out|in|err)/.test(t)) return true
    return false
  }

  function renderContent(text) {
    if (!text) return ''
    const lines = text.split('\n')
    let html = ''
    let codeLines = []
    function flushCode() {
      if (codeLines.length) {
        html += '<div class="code-block"><div class="code-header"><span class="java-file"> Java</span><span>Java</span></div><pre><code>' +
          codeLines.join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
          '</code></pre></div>'
        codeLines = []
      }
    }
    lines.forEach(line => {
      const trimmed = line.trim()
      if (trimmed === '') { html += '<br>'; return }
      if (isCode(line)) { codeLines.push(line); return }
      flushCode()
      if (/^Chapter\s+\d+:/.test(trimmed)) {
        html += '<p style="font-weight:bold;font-size:1.1em;margin:18px 0 8px;color:var(--text)">' + escapeHtml(trimmed) + '</p>'
        return
      }
      if (/^Section\s+[\d.]+:/.test(trimmed)) {
        html += '<p style="font-weight:bold;margin:14px 0 6px;color:var(--text)">' + escapeHtml(trimmed) + '</p>'
        return
      }
      if (/^(Output|Result|Example output)/i.test(trimmed)) {
        html += '<p style="font-weight:bold;margin:10px 0 4px;color:var(--text)">' + escapeHtml(trimmed) + '</p>'
        return
      }
      if (/^Java[®\u00AE]\s*Notes for Professionals/i.test(trimmed)) {
        html += '<p style="text-align:center;color:var(--text-muted);font-size:.8rem;margin:14px 0;border-top:1px solid var(--border);padding-top:6px">' + escapeHtml(trimmed) + '</p>'
        return
      }
      html += '<p style="margin:3px 0;line-height:1.55;color:var(--text);font-size:.93rem">' + escapeHtml(trimmed) + '</p>'
    })
    flushCode()
    return html
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  const prev = javaproData.find(c => c.id === activeId - 1)
  const next = javaproData.find(c => c.id === activeId + 1)

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="javaproSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search book chapters..." id="javaproSearchInput" className="sidebar-search-input" />
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
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}><i className="fas fa-bars"></i> Chapters</button>
        <div className="lesson-container" id="javaproContainer">
          {ch ? (
            <div style={{ maxWidth: '860px', margin: '0 auto', padding: '20px', background: 'var(--card)', color: 'var(--text)' }}>
              <h1 style={{ fontSize: '1.5em', marginBottom: '16px', color: 'var(--primary)', borderBottom: '2px solid var(--border)', paddingBottom: '6px', fontFamily: 'Georgia,serif' }}>
                Chapter {ch.id}: {ch.title}
              </h1>
              <div style={{ fontFamily: 'Georgia,serif', color: 'var(--text)' }}>
                <VoiceReader text={ch.content} title={'Ch' + ch.id + ': ' + ch.title} />
                <SafeHTML html={renderContent(ch.content)} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '28px', paddingTop: '12px', borderTop: '2px solid var(--border)' }}>
                {prev ? (
                  <button className="btn btn-outline" onClick={() => showChapter(prev.id)}><i className="fas fa-arrow-left"></i> Previous</button>
                ) : <span></span>}
                {next ? (
                  <button className="btn btn-primary" onClick={() => showChapter(next.id)}>Next <i className="fas fa-arrow-right"></i></button>
                ) : <span></span>}
              </div>
            </div>
          ) : (
            <div className="empty-state"><i className="fas fa-book-open"></i><h3>Chapter not found</h3></div>
          )
          }
        </div>
      </main>
      <div id="javaproSidebarBackdrop" className="sidebar-backdrop" onClick={toggleSidebar}></div>
    </div>
  )
}
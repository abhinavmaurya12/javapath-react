import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import lessons from '../data/lessons'
import dsaTopics from '../data/dsaTopics'
import practiceData from '../data/practiceData'
import javaproData from '../data/javaproData'
import interviewQuestions from '../data/interviewQuestions'
import { frontendHtml, frontendCss, frontendJavascript, frontendReact, categoryKeyMap, categoryNameToId } from '../data/index'

const frontendTracks = {
  html: frontendHtml,
  css: frontendCss,
  javascript: frontendJavascript,
  react: frontendReact
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(-1)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const performSearch = useCallback((q) => {
    if (!q || q.length < 2) { setResults([]); return }
    const ql = q.toLowerCase()
    const seen = {}
    const out = []

    lessons.forEach(function (l, idx) {
      const titleMatch = l.title.toLowerCase().includes(ql)
      const content = (typeof l.content === 'string') ? l.content.toLowerCase() : ''
      const codeMatch = content.includes(ql)
      if (titleMatch || codeMatch) {
        const label = titleMatch ? 'Learn' : 'Code in chapter'
        if (!seen['lesson-' + idx]) {
          seen['lesson-' + idx] = true
          out.push({ type: 'java', label, title: (idx + 1) + '. ' + l.title, action: () => navigate('/java', { state: { lesson: idx } }) })
        }
      }
    })

    if (practiceData) {
      Object.keys(practiceData).forEach(function (catName) {
        const cat = practiceData[catName]
        const catId = categoryNameToId[catName] || 'basic'
        if (!cat || !cat.files) return
        Object.keys(cat.files).forEach(function (fileName) {
          let match = false
          if (fileName.toLowerCase().includes(ql)) match = true
          else {
            const fileData = cat.files[fileName]
            let code = ''
            if (typeof fileData === 'string') code = fileData
            else if (fileData && typeof fileData === 'object') code = fileData.code || fileData.content || JSON.stringify(fileData)
            if (code.toLowerCase().includes(ql)) match = true
          }
          if (match && !seen['practice-' + fileName]) {
            seen['practice-' + fileName] = true
            out.push({ type: 'practice', label: catName, title: fileName, action: () => navigate('/practice', { state: { category: catId, file: fileName } }) })
          }
        })
      })
    }

    if (javaproData) {
      javaproData.forEach(function (ch) {
        let match = false
        if (ch.title.toLowerCase().includes(ql)) match = true
        else if (ch.content && ch.content.toLowerCase().includes(ql)) match = true
        if (match && !seen['javapro-' + ch.id]) {
          seen['javapro-' + ch.id] = true
          out.push({ type: 'book', label: 'JavaPro Book', title: 'Ch ' + ch.id + ': ' + ch.title, action: () => navigate('/javapro', { state: { chapter: ch.id } }) })
        }
      })
    }

    if (dsaTopics) {
      Object.keys(dsaTopics).forEach(function (key) {
        const t = dsaTopics[key]
        if (!t) return
        const titleMatch = key.toLowerCase().includes(ql) || (t.title && t.title.toLowerCase().includes(ql))
        const contentMatch = t.content && t.content.toLowerCase().includes(ql)
        if (titleMatch || contentMatch) {
          if (!seen['dsa-' + key]) {
            seen['dsa-' + key] = true
            const label = titleMatch ? 'DSA Topic' : 'In DSA code'
            const displayName = t.title || key.replace(/-/g, ' ')
            out.push({ type: 'dsa', label, title: displayName, action: () => navigate('/dsa', { state: { topic: key } }) })
          }
        }
      })
    }

    if (interviewQuestions && interviewQuestions.length) {
      interviewQuestions.forEach(function (qq) {
        const titleMatch = qq.title.toLowerCase().includes(ql)
        const contentStr = (typeof qq.content === 'string') ? qq.content.toLowerCase() : ''
        const contentMatch = contentStr.includes(ql)
        if (titleMatch || contentMatch) {
          if (!seen['interview-' + qq.id]) {
            seen['interview-' + qq.id] = true
            const label = titleMatch ? 'Interview Q' : 'In answer'
            out.push({ type: 'interview', label, title: 'Q' + qq.id + ': ' + qq.title, action: () => navigate('/interview', { state: { question: qq.id } }) })
          }
        }
      })
    }

    Object.keys(frontendTracks).forEach(function (trackName) {
      const track = frontendTracks[trackName]
      if (!track || !track.chapters) return
      track.chapters.forEach(function (ch, idx) {
        const titleMatch = ch.title.toLowerCase().includes(ql)
        const contentMatch = ch.content && ch.content.toLowerCase().includes(ql)
        if (titleMatch || contentMatch) {
          if (!seen['frontend-' + trackName + '-' + idx]) {
            seen['frontend-' + trackName + '-' + idx] = true
            const label = titleMatch ? track.title : 'In ' + track.title
            out.push({ type: 'frontend', label, title: track.title + ': ' + ch.title, action: () => navigate('/frontend/' + trackName, { state: { chapter: idx } }) })
          }
        }
      })
    })

    setResults(out)
  }, [navigate])

  useEffect(() => {
    const t = setTimeout(() => performSearch(query), 150)
    return () => clearTimeout(t)
  }, [query, performSearch])

  function hideResults() { setShow(false); setQuery(''); setSelected(-1) }

  function handleKeyDown(e) {
    if (e.key === 'Escape') { hideResults(); inputRef.current && inputRef.current.blur() }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
    else if (e.key === 'Enter' && selected >= 0 && results[selected]) { e.preventDefault(); results[selected].action(); hideResults() }
  }

  const iconColor = { java: 'var(--secondary)', practice: 'var(--primary)', book: '#e91e63', dsa: '#27ae60', interview: '#f39c12', frontend: '#61dafb' }

  return (
    <div className="search-box" style={{ position: 'relative' }}>
      <i className="fas fa-search" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '.85rem', pointerEvents: 'none' }}></i>
      <input
        ref={inputRef}
        type="text"
        id="searchInput"
        placeholder="Search... (Ctrl+K)"
        value={query}
        onChange={e => { setQuery(e.target.value); setShow(true); setSelected(-1) }}
        onFocus={() => setShow(true)}
        onKeyDown={handleKeyDown}
      />
      <div
        id="searchResults"
        className="search-results"
        style={{ display: show && results.length ? 'block' : 'none' }}
      >
        {results.map((r, i) => (
          <div
            key={i}
            className="search-item"
            style={{ background: i === selected ? 'var(--surface)' : '' }}
            onMouseEnter={() => setSelected(i)}
            onMouseDown={e => { e.preventDefault(); r.action(); hideResults() }}
          >
            <i className={'fas fa-' + (r.type === 'java' ? 'book' : r.type === 'practice' ? 'file-code' : r.type === 'book' ? 'book' : r.type === 'dsa' ? 'project-diagram' : r.type === 'interview' ? 'comments' : 'book')} style={{ color: iconColor[r.type] }}></i>
            <span>{r.title}</span>
            <span className="search-label">{r.label}</span>
          </div>
        ))}
        {show && query.length >= 2 && results.length === 0 && (
          <div className="search-item" style={{ color: 'var(--text-muted)', cursor: 'default' }}>No results found</div>
        )}
      </div>
    </div>
  )
}
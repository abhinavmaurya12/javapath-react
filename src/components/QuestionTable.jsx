import React, { useState, useEffect } from 'react'
import CodeHighlight from './CodeHighlight'

export default function QuestionTable({ questions, statusMap, onStatusChange, onLeetCode, onStartCoding }) {
  const [sortKey, setSortKey] = useState('id')
  const [sortDir, setSortDir] = useState('asc')
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 640) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function toggleSort(key) {
    if (sortKey === key) setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...questions].sort((a, b) => {
    let av, bv
    if (sortKey === 'id') { av = a.id; bv = b.id }
    else if (sortKey === 'title') { av = a.title.toLowerCase(); bv = b.title.toLowerCase() }
    else if (sortKey === 'difficulty') { av = a.difficulty; bv = b.difficulty }
    else if (sortKey === 'category') { av = a.category; bv = b.category }
    else { av = a.id; bv = b.id }
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  function SortHeader({ children, key, align = 'left' }) {
    const active = sortKey === key
    return (
      <th style={{ textAlign: align }} onClick={() => toggleSort(key)}>
        <span style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
          {children}
          {active ? (sortDir === 'asc' ? ' ▲' : ' ▼') : ''}
        </span>
      </th>
    )
  }

  function toggleStatus(q, e) {
    e.stopPropagation()
    const cur = statusMap[q.id] || 'none'
    const next = cur === 'solved' ? 'none' : cur === 'attempted' ? 'solved' : 'attempted'
    onStatusChange(q.id, next)
  }

  function statusLabel(s) {
    return s === 'solved' ? 'Solved' : s === 'attempted' ? 'Attempted' : 'Not Started'
  }

  function renderDetail(q) {
    return (
      <div className="qtable-detail">
        <div className="qtable-detail-problem">{q.problem}</div>
        {q.example && q.example.input && q.example.input !== 'See problem' && (
          <div className="qtable-io">
            {q.example.input !== 'See problem' && (
              <div className="qtable-io-box"><label>Input</label><pre>{q.example.input}</pre></div>
            )}
            {q.example.output !== 'See problem' && (
              <div className="qtable-io-box"><label>Output</label><pre>{q.example.output}</pre></div>
            )}
          </div>
        )}
        <div className="qtable-detail-actions">
          <button className="cp-btn" onClick={() => { /* hint handled inline */ }}>
            <i className="fas fa-lightbulb"></i> Hint
          </button>
          <button className="cp-btn" onClick={() => setExpandedId(null)}>
            <i className="fas fa-eye"></i> Hide
          </button>
          {q.leetcode && (
            <button className="cp-btn cp-btn-primary" onClick={() => onLeetCode(q.leetcode)}>
              <i className="fas fa-external-link-alt"></i> Solve on LeetCode
            </button>
          )}
          <button className="cp-btn cp-btn-primary" onClick={() => onStartCoding(q)}>
            <i className="fas fa-code"></i> Start Coding
          </button>
        </div>
        {q.hint && (
          <details className="qtable-details" open>
            <summary><i className="fas fa-lightbulb"></i> Hint</summary>
            <div className="cp-hint-box">{q.hint}</div>
          </details>
        )}
        <details className="qtable-details">
          <summary><i className="fas fa-code"></i> Solution</summary>
          <div className="cp-sol-box">
            {q.approach && <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', marginBottom: 8 }}><strong>Approach:</strong> {q.approach}</p>}
            {(() => {
              const isReact = q.category === 'React'
              const isFrontend = q.category === 'HTML/CSS' || q.category === 'JavaScript' || q.category === 'React'
              if (isReact) return <CodeHighlight code={q.solution} language="JSX" header="Solution.jsx" />
              if (isFrontend) return <CodeHighlight code={q.solution} language={q.category === 'HTML/CSS' ? 'HTML' : 'JavaScript'} header="Solution" />
              return <CodeHighlight code={q.solution} language="Java" header="Solution.java" />
            })()}
            {q.time && <p style={{ marginTop: 12, fontSize: '.85rem', color: 'var(--text-muted)' }}><strong>Time:</strong> {q.time} &nbsp; <strong>Space:</strong> {q.space}</p>}
            {q.concepts && (
              <p style={{ marginTop: 8, fontSize: '.82rem', color: 'var(--text-muted)' }}>
                <strong>Concepts:</strong> {q.concepts.join(', ')}
              </p>
            )}
          </div>
        </details>
      </div>
    )
  }

  // Mobile: card-based layout
  if (isMobile) {
    return (
      <div className="qtable-wrap">
        {sorted.map(q => {
          const status = statusMap[q.id] || 'none'
          const isExpanded = expandedId === q.id
          return (
            <div key={q.id} className="qtable-mobile-card">
              <div className="qtable-mobile-card-top" onClick={() => setExpandedId(isExpanded ? null : q.id)}>
                <span className="qtable-mobile-id">#{q.id}</span>
                <span className="qtable-title" style={{ flex: 1 }}>{q.title}</span>
              </div>
              <div className="qtable-mobile-card-meta">
                <span className={'qtable-diff ' + q.difficulty.toLowerCase()}>{q.difficulty}</span>
                <span className="qtable-cat">{q.category}</span>
                <span className="qtable-cat">{q.topic}</span>
                <button className={'qtable-status-btn ' + status} onClick={e => toggleStatus(q, e)}>
                  {statusLabel(status)}
                </button>
              </div>
              <div className="qtable-mobile-actions">
                {q.leetcode && (
                  <button className="qtable-link" onClick={e => { e.stopPropagation(); onLeetCode(q.leetcode) }} title="Solve on LeetCode">
                    <i className="fas fa-external-link-alt"></i> Solve on LeetCode
                  </button>
                )}
                <button className="qtable-link" onClick={e => { e.stopPropagation(); onStartCoding(q) }} title="Start Coding">
                  <i className="fas fa-code"></i> Start Coding
                </button>
              </div>
              {isExpanded && renderDetail(q)}
            </div>
          )
        })}
      </div>
    )
  }

  // Desktop: table layout
  return (
    <div className="qtable-wrap">
      <table className="qtable">
        <thead>
          <tr>
            <SortHeader key="id" align="center">#</SortHeader>
            <SortHeader key="title">Title</SortHeader>
            <SortHeader key="difficulty" align="center">Difficulty</SortHeader>
            <SortHeader key="category" align="center">Category</SortHeader>
            <th align="center" style={{ whiteSpace: 'nowrap' }}>Status</th>
            <th align="center" style={{ whiteSpace: 'nowrap' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(q => {
            const status = statusMap[q.id] || 'none'
            const isExpanded = expandedId === q.id
            return (
              <React.Fragment key={q.id}>
                <tr className={'qtable-row' + (isExpanded ? ' expanded' : '')} onClick={() => setExpandedId(isExpanded ? null : q.id)}>
                  <td style={{ textAlign: 'center', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{q.id}</td>
                  <td>
                    <div className="qtable-title">{q.title}</div>
                    <div className="qtable-topic">{q.topic}</div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={'qtable-diff ' + q.difficulty.toLowerCase()}>{q.difficulty}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="qtable-cat">{q.category}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className={'qtable-status-btn ' + status} onClick={e => toggleStatus(q, e)} title={statusLabel(status)}>
                      {statusLabel(status)}
                    </button>
                  </td>
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    {q.leetcode && (
                      <button className="qtable-link" onClick={e => { e.stopPropagation(); onLeetCode(q.leetcode) }} title="Solve on LeetCode">
                        <i className="fas fa-external-link-alt"></i>
                      </button>
                    )}
                    <button className="qtable-link" onClick={e => { e.stopPropagation(); onStartCoding(q) }} title="Start Coding">
                      <i className="fas fa-code"></i>
                    </button>
                  </td>
                </tr>
                {isExpanded && (
                  <tr className="qtable-detail-row">
                    <td colSpan={6}>
                      {renderDetail(q)}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}